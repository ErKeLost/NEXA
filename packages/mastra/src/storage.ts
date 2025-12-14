import { PostgresStore } from '@mastra/pg';
import { MastraEnv } from './env';

export function createMastraStore(env: MastraEnv) {
  const connectionString = env.DATABASE_URL_MEMORY ?? env.DATABASE_URL;
  if (!connectionString) {
    throw new Error('Mastra Postgres store requires DATABASE_URL_MEMORY or DATABASE_URL');
  }
  return new PostgresStore({
    connectionString,
  });
}
