import { openai } from '@ai-sdk/openai';
import { MastraEnv } from './env';

/**
 * Minimal model selector: defaults to OpenAI if key is present,
 * otherwise falls back to a string model id (Mastra will route).
 */
export function getDefaultModel(env: MastraEnv) {
  if (env.OPENAI_API_KEY) {
    const modelId = env.MASTRA_DEFAULT_MODEL ?? 'gpt-4o-mini';
    return openai(modelId);
  }
  return env.MASTRA_DEFAULT_MODEL ?? 'openrouter/anthropic/claude-3.5-sonnet';
}
