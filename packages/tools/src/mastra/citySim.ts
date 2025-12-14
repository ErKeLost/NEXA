import { createTool } from '@mastra/core/tools';
import { z } from 'zod';

const cityStateSchema = z.object({
  cityName: z.string(),
  turn: z.number().int().min(1),
  population: z.number().int().min(0),
  treasury: z.number().int(),
  happiness: z.number().int().min(0).max(100),
  environment: z.number().int().min(0).max(100),
  security: z.number().int().min(0).max(100),
  infrastructure: z.number().int().min(0).max(100),
  stability: z.number().int().min(0).max(100),
});

type CityState = z.infer<typeof cityStateSchema>;

const cityDiffSchema = z.object({
  population: z.number().int().optional(),
  treasury: z.number().int().optional(),
  happiness: z.number().int().optional(),
  environment: z.number().int().optional(),
  security: z.number().int().optional(),
  infrastructure: z.number().int().optional(),
  stability: z.number().int().optional(),
});

type CityDiff = z.infer<typeof cityDiffSchema>;

type CityFocus =
  | 'economy'
  | 'infrastructure'
  | 'environment'
  | 'security'
  | 'welfare'
  | 'balanced';

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

function applyCityDecision(
  state: CityState,
  focus: CityFocus,
  intensity: 1 | 2 | 3,
): { newState: CityState; diff: CityDiff; events: string[] } {
  const events: string[] = [];
  const diff: CityDiff = {};

  const swing = intensity * 2;
  const rand = () => Math.floor((Math.random() - 0.5) * swing);

  switch (focus) {
    case 'economy': {
      diff.treasury = (diff.treasury ?? 0) + 12 * intensity + rand();
      diff.population = (diff.population ?? 0) + 3_000 * intensity + 200 * rand();
      diff.happiness = (diff.happiness ?? 0) - 2 * intensity + rand();
      diff.environment = (diff.environment ?? 0) - intensity + rand();
      events.push('你推出了一揽子经济刺激计划，招商引资、减税和科技补贴一起上。');
      break;
    }
    case 'infrastructure': {
      diff.infrastructure = (diff.infrastructure ?? 0) + 8 * intensity + rand();
      diff.treasury = (diff.treasury ?? 0) - 10 * intensity + rand();
      diff.happiness = (diff.happiness ?? 0) + 3 * intensity + rand();
      events.push('你大规模投资地铁、高速路和数据中心，城市工地昼夜不停。');
      break;
    }
    case 'environment': {
      diff.environment = (diff.environment ?? 0) + 10 * intensity + rand();
      diff.treasury = (diff.treasury ?? 0) - 6 * intensity + rand();
      diff.happiness = (diff.happiness ?? 0) + 2 * intensity + rand();
      diff.stability = (diff.stability ?? 0) + 1 * intensity + rand();
      events.push('你收紧排放标准，建设公园和绿廊，市民开始在河边跑步。');
      break;
    }
    case 'security': {
      diff.security = (diff.security ?? 0) + 9 * intensity + rand();
      diff.happiness = (diff.happiness ?? 0) - 2 * intensity + rand();
      diff.treasury = (diff.treasury ?? 0) - 5 * intensity + rand();
      events.push('你扩充警力、升级城市监控系统，夜间治安明显好转。');
      break;
    }
    case 'welfare': {
      diff.happiness = (diff.happiness ?? 0) + 8 * intensity + rand();
      diff.stability = (diff.stability ?? 0) + 3 * intensity + rand();
      diff.treasury = (diff.treasury ?? 0) - 7 * intensity + rand();
      events.push('你提高社保、医疗和教育投入，民生满意度飙升。');
      break;
    }
    case 'balanced':
    default: {
      diff.treasury = (diff.treasury ?? 0) + 4 * intensity + rand();
      diff.population = (diff.population ?? 0) + 1_500 * intensity + 100 * rand();
      diff.happiness = (diff.happiness ?? 0) + 2 * intensity + rand();
      diff.environment = (diff.environment ?? 0) + 1 * intensity + rand();
      diff.infrastructure = (diff.infrastructure ?? 0) + 2 * intensity + rand();
      diff.security = (diff.security ?? 0) + 1 * intensity + rand();
      diff.stability = (diff.stability ?? 0) + 2 * intensity + rand();
      events.push('你稳中求进，对各个板块都做了一点升级和改革。');
      break;
    }
  }

  const randomRoll = Math.random();
  if (randomRoll > 0.85) {
    diff.population = (diff.population ?? 0) + 10_000;
    diff.treasury = (diff.treasury ?? 0) + 5;
    events.push('一家全球互联网巨头把区域总部搬到了你的城市！');
  } else if (randomRoll < 0.1) {
    diff.population = (diff.population ?? 0) - 8_000;
    diff.treasury = (diff.treasury ?? 0) - 8;
    diff.happiness = (diff.happiness ?? 0) - 5;
    events.push('全球经济震荡，你的城市也受到波及，一部分企业裁员或搬离。');
  }

  const newState: CityState = {
    cityName: state.cityName,
    turn: state.turn + 1,
    population: Math.max(0, state.population + (diff.population ?? 0)),
    treasury: Math.max(0, state.treasury + (diff.treasury ?? 0)),
    happiness: clamp(state.happiness + (diff.happiness ?? 0), 0, 100),
    environment: clamp(state.environment + (diff.environment ?? 0), 0, 100),
    security: clamp(state.security + (diff.security ?? 0), 0, 100),
    infrastructure: clamp(state.infrastructure + (diff.infrastructure ?? 0), 0, 100),
    stability: clamp(state.stability + (diff.stability ?? 0), 0, 100),
  };

  return { newState, diff, events };
}

export const citySimTool = createTool({
  id: 'city-sim-step',
  description:
    '在“城市建造 / 国家模拟”游戏中推进一回合，根据当前城市状态和玩家的决策，更新关键指标并返回新的城市状态。',
  inputSchema: z.object({
    state: cityStateSchema.describe('当前最新的城市状态 JSON。每次调用都必须填完整。'),
    focus: z
      .enum(['economy', 'infrastructure', 'environment', 'security', 'welfare', 'balanced'])
      .describe(
        '本回合决策重点：economy(经济)、infrastructure(基建)、environment(环境)、security(治安)、welfare(民生)、balanced(均衡发展)。',
      ),
    intensity: z
      .number()
      .int()
      .min(1)
      .max(3)
      .default(2)
      .describe('本回合政策力度：1=温和，2=中等，3=激进。'),
    decisionSummary: z
      .string()
      .describe('用一两句话总结玩家这回合想做的事，方便写入事件描述。'),
  }),
  outputSchema: z.object({
    state: cityStateSchema,
    diff: cityDiffSchema,
    events: z.array(z.string()),
  }),

  execute: async ({ context }) => {
    const { state, focus, intensity, decisionSummary } = context as {
      state: CityState;
      focus: CityFocus;
      intensity: 1 | 2 | 3;
      decisionSummary: string;
    };

    const { newState, diff, events } = applyCityDecision(state, focus, intensity);

    return {
      state: newState,
      diff,
      events: [...events, `【决策摘要】${decisionSummary}`],
    };
  },
});
