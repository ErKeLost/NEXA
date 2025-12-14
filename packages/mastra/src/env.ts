import { z } from 'zod';

const MastraEnvSchema = z.object({
  DATABASE_URL_MEMORY: z.string().url().optional(),
  DATABASE_URL: z.string().url().optional(),
  OPENAI_API_KEY: z.string().optional(),
  OPENROUTER_API_KEY: z.string().optional(),
  ANTHROPIC_API_KEY: z.string().optional(),
  GOOGLE_API_KEY: z.string().optional(),
  TAVILY_API_KEY: z.string().optional(),
  FIGMA_PERSONAL_ACCESS_TOKEN: z.string().optional(),
  MASTRA_DEFAULT_MODEL: z.string().optional(),
});

export type MastraEnv = z.infer<typeof MastraEnvSchema>;

export function getMastraEnv(env: NodeJS.ProcessEnv = process.env): MastraEnv {
  return MastraEnvSchema.parse(env);
}

export function assertMastraEnv(env: NodeJS.ProcessEnv = process.env): MastraEnv {
  const parsed = getMastraEnv(env);
  if (!parsed.DATABASE_URL_MEMORY && !parsed.DATABASE_URL) {
    throw new Error('Mastra requires DATABASE_URL_MEMORY or DATABASE_URL for Postgres storage');
  }
  return parsed;
}
