import { Mastra } from '@mastra/core';
import {
  citySimAgent,
  codegenAgent,
  cryptoAnalystAgent,
  figmaAgent,
  figmaHtmlAgent,
  imageAgent,
  webSearchAgent,
} from '@nexa/agents';
import { assertMastraEnv } from './env';
import { createMastraStore } from './storage';
import { exampleWorkflow } from './workflows';

/**
 * Creates a Mastra instance with all registered agents and shared storage.
 */
export function createMastraInstance(env: NodeJS.ProcessEnv = process.env) {
  const cfg = assertMastraEnv(env);
  const storage = createMastraStore(cfg);

  return new Mastra({
    agents: {
      codegenAgent,
      'web-search-agent': webSearchAgent,
      'crypto-analyst-agent': cryptoAnalystAgent,
      'image-generation-agent': imageAgent,
      'figma-agent': figmaAgent,
      'figma-html-agent': figmaHtmlAgent,
      'city-sim-agent': citySimAgent,
    },
    storage,
    workflows: {
      exampleWorkflow,
    },
  });
}

export const mastra = createMastraInstance();
