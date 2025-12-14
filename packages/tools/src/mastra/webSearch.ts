import { createTool } from '@mastra/core/tools';
import { z } from 'zod';

/**
 * Tavily-backed web search tool.
 * Keep maxResults small to avoid latency and quota issues.
 */
export const webSearch = createTool({
  id: 'tavily-web-search',
  description: '使用 Tavily 进行实时网络搜索，返回带标题和链接的结果列表。',
  inputSchema: z.object({
    query: z.string().min(3).describe('要搜索的问题'),
    maxResults: z
      .number()
      .int()
      .min(1)
      .max(8)
      .default(4)
      .describe('返回结果数量'),
  }),
  outputSchema: z.array(
    z.object({
      title: z.string(),
      url: z.string(),
      snippet: z.string().optional(),
    }),
  ),
  execute: async ({ context }) => {
    const { query, maxResults } = context;

    if (!process.env.TAVILY_API_KEY) {
      throw new Error('TAVILY_API_KEY is not set');
    }

    const resp = await fetch('https://api.tavily.com/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.TAVILY_API_KEY}`,
      },
      body: JSON.stringify({
        query,
        max_results: maxResults,
      }),
    });

    if (!resp.ok) {
      const text = await resp.text();
      throw new Error(`Tavily search failed: ${resp.status} ${text}`);
    }

    const data = (await resp.json()) as {
      results: { title: string; url: string; content?: string }[];
    };

    return data.results.map((r) => ({
      title: r.title,
      url: r.url,
      snippet: r.content ?? '',
    }));
  },
});
