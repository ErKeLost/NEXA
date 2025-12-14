import { createTool } from '@mastra/core/tools';
import { z } from 'zod';

const SYMBOL_TO_ID: Record<string, string> = {
  btc: 'bitcoin',
  eth: 'ethereum',
  sol: 'solana',
  bnb: 'binancecoin',
  doge: 'dogecoin',
  ton: 'the-open-network',
  xrp: 'ripple',
  ada: 'cardano',
  avax: 'avalanche-2',
  link: 'chainlink',
  op: 'optimism',
  arb: 'arbitrum',
  sui: 'sui',
  base: 'base-protocol',
};

export const cryptoMarketTool = createTool({
  id: 'crypto-market',
  description:
    '获取加密货币的实时行情数据（当前价格、市值、24h 波动、7d 波动等），数据来源 CoinGecko 免费 API。',
  inputSchema: z.object({
    symbol: z
      .string()
      .describe(
        '币种符号，例如 BTC、ETH、SOL。也可以直接传 CoinGecko 的 id（例如 bitcoin）。',
      ),
    vsCurrency: z
      .string()
      .default('usd')
      .describe('法币计价单位，例如 usd、eur、cny，默认 usd')
      .optional(),
  }),
  outputSchema: z.object({
    name: z.string(),
    symbol: z.string(),
    coingeckoId: z.string(),
    vsCurrency: z.string(),
    currentPrice: z.number(),
    marketCap: z.number().nullable(),
    volume24h: z.number().nullable(),
    priceChange1h: z.number().nullable(),
    priceChange24h: z.number().nullable(),
    priceChange7d: z.number().nullable(),
    dataSource: z.literal('coingecko'),
    raw: z.any().optional(),
  }),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  execute: async ({ context }) => {
    const vsCurrency = (context.vsCurrency ?? 'usd').toLowerCase();
    const input = context.symbol.trim();
    const key = input.toLowerCase();

    const coingeckoId = SYMBOL_TO_ID[key] ?? key;

    const url = new URL('https://api.coingecko.com/api/v3/coins/markets');
    url.searchParams.set('vs_currency', vsCurrency);
    url.searchParams.set('ids', coingeckoId);
    url.searchParams.set('price_change_percentage', '1h,24h,7d');

    const res = await fetch(url.toString(), {
      headers: {
        'User-Agent': 'nexa-crypto-agent/1.0',
        Accept: 'application/json',
      },
    });

    if (!res.ok) {
      throw new Error(`CoinGecko 请求失败: ${res.status} ${res.statusText}`);
    }

    const data = (await res.json()) as any[];

    if (!data || data.length === 0) {
      throw new Error(
        `在 CoinGecko 上没有找到币种：${context.symbol}（尝试 id：${coingeckoId}）`,
      );
    }

    const item = data[0];

    return {
      name: item.name as string,
      symbol: (item.symbol?.toUpperCase?.() ?? context.symbol.toUpperCase()) as string,
      coingeckoId,
      vsCurrency,
      currentPrice: (item.current_price ?? 0) as number,
      marketCap: (item.market_cap ?? null) as number | null,
      volume24h: (item.total_volume ?? null) as number | null,
      priceChange1h: (item.price_change_percentage_1h_in_currency ?? null) as number | null,
      priceChange24h: (item.price_change_percentage_24h_in_currency ?? null) as number | null,
      priceChange7d: (item.price_change_percentage_7d_in_currency ?? null) as number | null,
      dataSource: 'coingecko' as const,
      raw: item,
    };
  },
});
