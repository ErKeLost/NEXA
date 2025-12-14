import { createTool } from '@mastra/core/tools';
import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import { z } from 'zod';

/**
 * Image generation via OpenRouter Gemini image preview model.
 * Persists images to /public/ai-images and returns relative URLs.
 */
export const nanoBananaImageTool = createTool({
  id: 'nano-banana-image',
  description: '使用 Google: Nano Banana Pro (Gemini 3 Pro Image Preview) 生成图片',
  inputSchema: z.object({
    prompt: z.string().min(5, 'prompt 太短了'),
    aspectRatio: z
      .enum(['1:1', '16:9', '9:16', '4:3', '3:4'])
      .default('1:1')
      .optional(),
    n: z.number().int().min(1).max(4).default(1).optional(),
  }),
  outputSchema: z.object({
    images: z.array(
      z.object({
        url: z.string(),
      }),
    ),
  }),

  execute: async ({ context }, { abortSignal }) => {
    const { prompt, aspectRatio = '1:1', n = 1 } = context;

    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
      throw new Error('OPENROUTER_API_KEY is not set');
    }

    const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      signal: abortSignal,
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-3-pro-image-preview',
        messages: [
          {
            role: 'user',
            content: prompt,
          },
        ],
        modalities: ['image', 'text'],
        image_config: {
          aspect_ratio: aspectRatio,
        },
        n,
        stream: false,
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`OpenRouter image generation failed: ${res.status} ${text}`);
    }

    const data = (await res.json()) as { choices?: Array<{ message?: { images?: Array<{ imageUrl?: { url?: string }; image_url?: { url?: string }; url?: string }> } }> };

    const images: { url: string }[] = [];

    const choices = data.choices ?? [];
    for (const choice of choices) {
      const message = choice.message ?? {};
      const imgs = message.images ?? [];
      for (const img of imgs) {
        const rawUrl: string | undefined =
          img.imageUrl?.url ?? img.image_url?.url ?? img.url;

        if (!rawUrl) continue;

        let fileBuffer: Buffer;

        if (rawUrl.startsWith('data:image')) {
          const base64 = rawUrl.split(',')[1] ?? '';
          fileBuffer = Buffer.from(base64, 'base64');
        } else {
          const imgRes = await fetch(rawUrl);
          const arrBuf = await imgRes.arrayBuffer();
          fileBuffer = Buffer.from(arrBuf);
        }

        const filename = `${crypto.randomUUID()}.png`;
        const filePath = path.join(process.cwd(), 'public', 'ai-images', filename);

        await fs.mkdir(path.dirname(filePath), { recursive: true });
        await fs.writeFile(filePath, fileBuffer);

        const publicUrl = `/ai-images/${filename}`;

        images.push({ url: publicUrl });
      }
    }

    return { images };
  },
});
