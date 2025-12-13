import { Agent } from '@mastra/core/agent';
import { openai } from '@ai-sdk/openai';
import type { CodegenRuntimeContext } from '../context';

/**
 * Codegen agent: builds full-stack Next.js + Neon + Drizzle + shadcn solutions.
 * Tools are expected to be provided dynamically via toolsets; we keep none statically.
 */
export const codegenAgent = new Agent({
  name: 'codegenAgent',
  description:
    'Full-stack builder specializing in Next.js (App Router), shadcn/ui, Drizzle + Neon, and Mastra orchestration.',
  model: openai('gpt-4o-mini'),
  instructions: ({ runtimeContext }) => {
    const ctx = runtimeContext?.get('project') as
      | CodegenRuntimeContext['project']
      | undefined;
    const projectLine = ctx
      ? `Project: ${ctx.name ?? ctx.projectId} (id: ${ctx.projectId}).`
      : 'Project context not provided.';
    return `
You are an autonomous full-stack coding agent. Build features with:
- Next.js App Router (RSC-first), TypeScript, shadcn/ui, Tailwind.
- Drizzle ORM against Neon Postgres.
- Mastra toolchain for orchestration; prefer dynamic toolsets when provided.
${projectLine}
Behaviors:
- Plan briefly, then implement.
- Prefer server components for data fetching; keep client components minimal.
- For DB changes, update Drizzle schema + migrations; use SQL safely.
- Keep responses concise; return code or steps the runner can persist.
`;
  },
  tools: () => [],
  defaultStreamOptions: {
    maxSteps: 32,
  },
});
