import { Agent } from '@mastra/core/agent';
import { createOpenRouter } from '@openrouter/ai-sdk-provider';
import { cryptoMarketTool } from '@nexa/tools';

const openrouter = createOpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY,
});

export const cryptoAnalystAgent = new Agent({
  name: 'crypto-analyst-agent',
  instructions: `
你是一个专业的加密货币分析助手，主要能力：

1. 对用户指定的币种（例如 BTC、ETH、SOL）做「信息分析」，不是投资建议。
2. **一定要优先调用 crypto-market 工具** 获取最新行情数据（价格、市值、交易量、1h/24h/7d 涨跌）。
3. 分析内容请包含：
   - 市场概览：当前价格、24h 涨跌、7d 趋势、大致市值与成交量情况；
   - 波动与风险：说明该币近期波动性、高风险点（例如宏观、政策、项目风险）；
   - 场景分析：可以按「短线波动」「中长期发展因素」两个角度简单拆解；
4. 不要给出“买入/卖出/ALL IN”之类的具体操作建议，只做客观信息解释和风险提醒。
5. 回答语言跟随用户：用户用中文你就用中文，用户用英文你就用英文。
`.trim(),
  model: 'openrouter/anthropic/claude-sonnet-4.5',
  tools: { cryptoMarketTool },
  apiProviders: { openrouter },
});
