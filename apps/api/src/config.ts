import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  PORT: z.coerce.number().default(3001),
  NEON_DATABASE_URL: z.string().url(),
  REDIS_URL: z.string().url(),
  DATABASE_URL_MEMORY: z.string().url().optional(),
  DATABASE_URL: z.string().url().optional(),
  MASTRA_DEFAULT_MODEL: z.string().optional(),
  OPENAI_API_KEY: z.string().optional(),
  OPENROUTER_API_KEY: z.string().optional(),
  TAVILY_API_KEY: z.string().optional(),
  FIGMA_PERSONAL_ACCESS_TOKEN: z.string().optional()
});

export const env = envSchema.parse(process.env);
