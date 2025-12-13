import { Mastra } from '@mastra/core';
import { codegenAgent } from './agents/codegenAgent';

/**
 * Single Mastra instance registering all agents.
 * Extend this as you add more agents/workflows.
 */
export const mastra = new Mastra({
  agents: { codegenAgent },
});

export type MastraInstance = typeof mastra;
