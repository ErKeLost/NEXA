import { Agent } from '@mastra/core/agent';
import { webSearch } from '@nexa/tools';

export const webSearchAgent = new Agent({
  name: 'web-search-agent',
  instructions: `
你是一个只做网络搜索的 Agent：

- 对于所有跟时间、新闻、价格、版本、GitHub Star 等“可能过时”的问题
  必须先调用 webSearch 工具，拿到结果再回答。
- 回答时先给结论，再列出你参考的链接。
`.trim(),
  model: 'openrouter/anthropic/claude-sonnet-4.5',
  tools: {
    webSearch,
  },
});
