import { Mastra } from '@mastra/core';
import { PostgresStore } from '@mastra/pg';
import { citySimAgent } from './agents/citySimAgent';
import { codegenAgent } from './agents/codegenAgent';
import { cryptoAnalystAgent } from './agents/cryptoAnalystAgent';
import { figmaAgent } from './agents/figmaAgent';
import { figmaHtmlAgent } from './agents/figmaHtmlAgent';
import { imageAgent } from './agents/imageAgent';
import { webSearchAgent } from './agents/webSearchAgent';

/**
 * Shared Mastra instance for NEXA services.
 * - Registers all agents (codegen + content agents).
 * - Persists memory to Postgres via @mastra/pg.
 */
const connectionString =
  process.env.DATABASE_URL_MEMORY || process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error(
    'Mastra Postgres store requires DATABASE_URL_MEMORY or DATABASE_URL',
  );
}

const pgStore = new PostgresStore({
  connectionString,
});

export const mastra = new Mastra({
  agents: {
    codegenAgent,
    'web-search-agent': webSearchAgent,
    'crypto-analyst-agent': cryptoAnalystAgent,
    'image-generation-agent': imageAgent,
    'figma-agent': figmaAgent,
    'figma-html-agent': figmaHtmlAgent,
    'city-sim-agent': citySimAgent,
  },
  storage: pgStore,
});

export type MastraInstance = typeof mastra;
