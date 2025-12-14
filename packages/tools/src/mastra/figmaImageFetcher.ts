import { createTool } from '@mastra/core/tools';
import { z } from 'zod';

/**
 * Given imageRefIds from Figma nodes, fetches the corresponding image URLs.
 */
export const figmaImageFetcher = createTool({
  id: 'figma-image-fetcher',
  description:
    '根据 Figma 文件的 image 引用（imageRef），批量获取对应的图片 URL，用于在 HTML 中渲染 <img> 或 background-image。',
  inputSchema: z.object({
    fileKey: z
      .string()
      .min(5)
      .describe('Figma file key（从 https://www.figma.com/file/<fileKey>/... 中提取）'),
    imageRefIds: z
      .array(z.string())
      .min(1)
      .describe('从 figmaReader 的 DesignNode.imageRefIds 收集的一组 imageRef 引用'),
  }),
  outputSchema: z.object({
    images: z.record(z.string(), z.string()),
  }),

  execute: async ({ context }) => {
    const { fileKey, imageRefIds } = context as {
      fileKey: string;
      imageRefIds: string[];
    };

    const token = process.env.FIGMA_PERSONAL_ACCESS_TOKEN;
    if (!token) {
      throw new Error('FIGMA_PERSONAL_ACCESS_TOKEN is not set');
    }

    const uniqueIds = Array.from(new Set(imageRefIds));
    if (uniqueIds.length === 0) {
      return { images: {} };
    }

    const url = `https://api.figma.com/v1/files/${fileKey}/images`;

    const resp = await fetchWithRetry(url, {
      headers: {
        'X-Figma-Token': token,
      },
    });

    if (!resp.ok) {
      const text = await resp.text();
      throw new Error(`Figma Image Fills API error: ${resp.status} ${text}`);
    }

    const data = (await resp.json()) as {
      images?: Record<string, string>;
      err?: string;
    };

    const allImages = data.images || {};

    const images: Record<string, string> = {};
    for (const id of uniqueIds) {
      const urlValue = allImages[id];
      if (urlValue) {
        images[id] = urlValue;
      }
    }

    return { images };
  },
});

async function fetchWithRetry(url: string, options: RequestInit, retries = 2) {
  for (let i = 0; i <= retries; i++) {
    const resp = await fetch(url, options);
    if (resp.status !== 429) return resp;

    const retryAfter = resp.headers.get('Retry-After');
    const delayMs = retryAfter ? Number(retryAfter) * 1000 : 500 * Math.pow(2, i);

    if (i === retries) {
      return resp;
    }

    await new Promise((r) => setTimeout(r, delayMs));
  }

  return fetch(url, options);
}
