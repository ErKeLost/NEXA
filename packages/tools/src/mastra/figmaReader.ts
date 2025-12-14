import { createTool } from '@mastra/core/tools';
import { z } from 'zod';

export type DesignNode = {
  id: string;
  name: string;
  type: string;
  visible?: boolean;
  absoluteBoundingBox?: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  relativeTransform?: number[][];
  rotation?: number;
  opacity?: number;
  layoutMode?: 'NONE' | 'HORIZONTAL' | 'VERTICAL';
  primaryAxisAlignItems?: string;
  counterAxisAlignItems?: string;
  itemSpacing?: number;
  padding?: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
  clipsContent?: boolean;
  constraints?: {
    horizontal: string;
    vertical: string;
  };
  fills?: any[];
  strokes?: any[];
  strokeWeight?: number;
  cornerRadius?: number;
  rectangleCornerRadii?: number[];
  effects?: any[];
  characters?: string;
  fontSize?: number;
  fontName?: {
    family: string;
    style: string;
  };
  fontWeight?: number;
  lineHeightPx?: number;
  letterSpacing?: number;
  textAlignHorizontal?: string;
  textAlignVertical?: string;
  fillColor?: string;
  imageRefIds?: string[];
  children?: DesignNode[];
};

export type Page = {
  id: string;
  name: string;
  children: DesignNode[];
};

const PageSchema = z.object({
  id: z.string(),
  name: z.string(),
  children: z.any(),
});

const OutputSchema = z.object({
  pages: z.array(PageSchema),
});

const figmaCache = new Map<string, { ts: number; data: { pages: Page[] } }>();
const inflightRequests = new Map<string, Promise<{ pages: Page[] }>>();
const CACHE_TTL_MS = 60_000;

export const figmaReader = createTool({
  id: 'figma-reader',
  description:
    '通过 Figma REST API 读取文件结构，提取 Page / Node 树（包含几何、Auto Layout、图片 fills、文本样式等），用于 pixel-perfect 设计还原。',
  inputSchema: z.object({
    fileKey: z
      .string()
      .min(5)
      .describe('Figma file key（从 https://www.figma.com/file/<fileKey>/... 中提取）'),
    nodeId: z.string().optional().describe('可选，只分析指定的 Frame / Page / Node id'),
  }),
  outputSchema: OutputSchema,

  execute: async ({ context }) => {
    const { fileKey, nodeId } = context as { fileKey: string; nodeId?: string };

    const token = process.env.FIGMA_PERSONAL_ACCESS_TOKEN;
    if (!token) {
      throw new Error('FIGMA_PERSONAL_ACCESS_TOKEN is not set');
    }

    const cacheKey = `${fileKey}:${nodeId ?? 'root'}`;
    const now = Date.now();
    const cached = figmaCache.get(cacheKey);
    if (cached && now - cached.ts < CACHE_TTL_MS) {
      return cached.data;
    }

    const inflight = inflightRequests.get(cacheKey);
    if (inflight) return inflight;

    const url = nodeId
      ? `https://api.figma.com/v1/files/${fileKey}/nodes?ids=${encodeURIComponent(nodeId)}`
      : `https://api.figma.com/v1/files/${fileKey}`;

    const requestPromise = (async () => {
      const resp = await fetchWithRetryAndTimeout(url, {
        headers: {
          'X-Figma-Token': token,
        },
      });

      if (!resp.ok) {
        const text = await resp.text();
        throw new Error(`Figma API error: ${resp.status} ${text}`);
      }

      const raw = (await resp.json()) as any;

      const normalized = normalizeFigmaForDesign(raw);

      const parsed = OutputSchema.parse(normalized);

      figmaCache.set(cacheKey, { ts: now, data: parsed });

      return parsed;
    })();

    inflightRequests.set(cacheKey, requestPromise);
    try {
      return await requestPromise;
    } finally {
      inflightRequests.delete(cacheKey);
    }
  },
});

async function fetchWithRetryAndTimeout(
  url: string,
  options: RequestInit,
  retries = 3,
  timeoutMs = 15_000,
): Promise<Response> {
  for (let i = 0; i <= retries; i++) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);

    try {
      const resp = await fetch(url, {
        ...options,
        signal: controller.signal,
      });

      clearTimeout(timer);

      if (resp.status !== 429) {
        return resp;
      }

      const retryAfter = resp.headers.get('Retry-After');
      const retryAfterSeconds = retryAfter ? Number.parseFloat(retryAfter) : null;
      const retryAfterMs =
        retryAfterSeconds != null && Number.isFinite(retryAfterSeconds)
          ? retryAfterSeconds * 1000
          : null;
      const baseDelay = 1000 * Math.pow(2, i);
      const jitter = Math.random() * 400;
      const delayMs = Math.min(
        30_000,
        (retryAfterMs != null ? retryAfterMs : baseDelay) + jitter,
      );

      if (i === retries) {
        return resp;
      }

      await new Promise((r) => setTimeout(r, delayMs));
    } catch (err: any) {
      clearTimeout(timer);

      if (err?.name === 'AbortError') {
        if (i === retries) {
          throw err;
        }
        await new Promise((r) => setTimeout(r, 500 * Math.pow(2, i)));
      } else {
        if (i === retries) {
          throw err;
        }
        await new Promise((r) => setTimeout(r, 500 * Math.pow(2, i)));
      }
    }
  }

  throw new Error('[figmaReader] unexpected fetch retry fallthrough');
}

function normalizeFigmaForDesign(data: any): { pages: Page[] } {
  const pages: Page[] = [];

  const document =
    data.document ?? (data.nodes ? (Object.values(data.nodes)[0] as any)?.document : null);

  if (!document) {
    return { pages: [] };
  }

  if (!Array.isArray(document.children) && document.type !== 'DOCUMENT') {
    const rootNode = document;
    const pageObj: Page = {
      id: rootNode.id,
      name: rootNode.name ?? 'Root',
      children: [mapNode(rootNode)],
    };
    pages.push(pageObj);
    return { pages };
  }

  const docChildren = Array.isArray(document.children) ? document.children : [];

  for (const page of docChildren) {
    if (page.type !== 'CANVAS') continue;

    const children: DesignNode[] = Array.isArray(page.children)
      ? page.children.map((child: any) => mapNode(child))
      : [];

    pages.push({
      id: page.id,
      name: page.name,
      children,
    });
  }

  return { pages };
}

function mapNode(node: any): DesignNode {
  const absolute = node.absoluteBoundingBox;

  const hasPadding =
    node.paddingTop != null ||
    node.paddingRight != null ||
    node.paddingBottom != null ||
    node.paddingLeft != null;

  let layoutMode: DesignNode['layoutMode'] = undefined;
  if (typeof node.layoutMode === 'string') {
    if (node.layoutMode === 'HORIZONTAL' || node.layoutMode === 'VERTICAL') {
      layoutMode = node.layoutMode;
    } else {
      layoutMode = 'NONE';
    }
  }

  const fills = Array.isArray(node.fills) ? node.fills : [];
  const imageRefIds = fills
    .filter((f: any) => f.type === 'IMAGE' && f.imageRef)
    .map((f: any) => f.imageRef as string);

  const designNode: DesignNode = {
    id: node.id,
    name: node.name ?? '',
    type: node.type,
    visible: node.visible ?? true,
    absoluteBoundingBox: absolute
      ? {
        x: absolute.x,
        y: absolute.y,
        width: absolute.width,
        height: absolute.height,
      }
      : undefined,
    relativeTransform: node.relativeTransform,
    rotation: node.rotation,
    opacity: node.opacity,
    layoutMode,
    primaryAxisAlignItems: node.primaryAxisAlignItems,
    counterAxisAlignItems: node.counterAxisAlignItems,
    itemSpacing: node.itemSpacing,
    padding: hasPadding
      ? {
        top: node.paddingTop ?? 0,
        right: node.paddingRight ?? 0,
        bottom: node.paddingBottom ?? 0,
        left: node.paddingLeft ?? 0,
      }
      : undefined,
    clipsContent: node.clipsContent,
    constraints: node.constraints,
    fills: node.fills,
    strokes: node.strokes,
    strokeWeight: node.strokeWeight,
    cornerRadius: node.cornerRadius,
    rectangleCornerRadii: node.rectangleCornerRadii,
    effects: node.effects,
    characters: node.characters,
    fontSize: node.style?.fontSize,
    fontName: node.style?.fontName,
    fontWeight: node.style?.fontWeight,
    lineHeightPx: node.style?.lineHeightPx,
    letterSpacing: node.style?.letterSpacing,
    textAlignHorizontal: node.style?.textAlignHorizontal,
    textAlignVertical: node.style?.textAlignVertical,
    fillColor: extractSolidColor(fills),
    imageRefIds: imageRefIds.length ? imageRefIds : undefined,
  };

  if (Array.isArray(node.children) && node.children.length > 0) {
    designNode.children = node.children.map((child: any) => mapNode(child));
  }

  return designNode;
}

function extractSolidColor(fills: any[] | undefined): string | undefined {
  if (!Array.isArray(fills)) return undefined;
  const solid = fills.find((f) => f.type === 'SOLID' && f.color);
  if (!solid || !solid.color) return undefined;

  const { r, g, b } = solid.color;
  const a = typeof solid.opacity === 'number' ? solid.opacity : 1;

  const to255 = (v: number) => Math.round(v * 255);

  return `rgba(${to255(r)}, ${to255(g)}, ${to255(b)}, ${a})`;
}
