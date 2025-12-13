import { z } from 'zod';

/**
 * Environment schema for backend runtime.
 * Keeps validation in one place and feeds Nest ConfigModule validate hook.
 */
export const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  PORT: z.coerce.number().default(3000),
  NEON_DATABASE_URL: z.string().url(),
  REDIS_URL: z.string().url(),
  MASTRA_MODEL: z.string().optional(), // default model id for agent runs
});

export type EnvVars = z.infer<typeof envSchema>;

export const validateEnv = (config: Record<string, unknown>): EnvVars => {
  const parsed = envSchema.safeParse(config);
  if (!parsed.success) {
    const message = parsed.error.errors
      .map((err) => `${err.path.join('.')}: ${err.message}`)
      .join('; ');
    throw new Error(`Invalid environment variables: ${message}`);
  }
  return parsed.data;
};
