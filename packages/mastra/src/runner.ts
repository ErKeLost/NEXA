import { mastra } from './instance';
import { buildRuntimeContext, CodegenRuntimeContext } from './context';
import { composeToolsets, Toolset } from './toolsets';

export type CodegenJobInput = {
  prompt: string;
  projectId: string;
  projectName?: string | null;
  modelId?: string;
  user?: { userId: string; displayName?: string | null };
  toolsets?: Toolset[];
  freestyleToolset?: Toolset;
  neonToolset?: Toolset;
  extraToolsets?: Toolset[];
  environmentVariables?: Record<string, string>;
};

export type CodegenJobResult = {
  text?: string | null;
  raw?: unknown;
};

/**
 * Run the codegen agent with a simple prompt and optional runtime context.
 * Attempts to collect text output from the Mastra stream; falls back to raw payload.
 */
export async function runCodegenJob(input: CodegenJobInput): Promise<CodegenJobResult> {
  const agent = mastra.getAgent('codegenAgent') as any;
  if (!agent) {
    throw new Error('codegenAgent is not registered in Mastra instance');
  }

  const runtimeContext = buildRuntimeContext({
    project: { projectId: input.projectId, name: input.projectName },
    user: input.user,
    modelId: input.modelId,
    environmentVariables: input.environmentVariables,
  } satisfies CodegenRuntimeContext);

  const messages = [{ role: 'user', content: input.prompt }];

  if (typeof agent.stream === 'function') {
    const stream = await agent.stream(messages, {
      runtimeContext,
      toolsets:
        input.toolsets ??
        composeToolsets({
          freestyleToolset: input.freestyleToolset,
          neonToolset: input.neonToolset,
          extras: input.extraToolsets,
        }),
      maxSteps: 50,
    });
    const text = await drainMastraStream(stream);
    return { text, raw: null };
  }

  if (typeof agent.run === 'function') {
    const result = await agent.run(messages, {
      runtimeContext,
      toolsets: input.toolsets,
    });
    return { text: stringifyResult(result), raw: result };
  }

  const result = await agent(messages, { runtimeContext, toolsets: input.toolsets });
  return { text: stringifyResult(result), raw: result };
}

async function drainMastraStream(stream: any): Promise<string | null> {
  if (typeof stream?.text === 'function') {
    return await stream.text();
  }

  const reader = stream?.fullStream?.getReader?.();
  if (!reader) {
    return null;
  }

  let text = '';
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      if (value?.type === 'text' && value.payload?.textDelta) {
        text += String(value.payload.textDelta);
      }
      if (value?.type === 'error') {
        const err =
          value.payload?.error?.message || value.errorText || 'Unknown agent error';
        throw new Error(err);
      }
    }
  } finally {
    reader.releaseLock?.();
  }

  return text || null;
}

function stringifyResult(result: unknown): string | null {
  if (result == null) return null;
  if (typeof result === 'string') return result;
  try {
    return JSON.stringify(result);
  } catch (err) {
    return String(result);
  }
}
