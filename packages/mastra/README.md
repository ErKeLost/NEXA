# @nexa/mastra

Mastra integration layer for NEXA. Centralizes env validation, storage, runtime context, toolset composition, and the shared Mastra instance so that API/web/agents all depend on one place.

## What it exposes
- `mastra`: singleton Mastra instance with all registered agents.
- `createMastraInstance(env?)`: factory if you need an isolated instance (tests).
- `buildRuntimeContext`, `composeToolsets`: helpers for runtime context + toolsets.
- `runCodegenJob`: helper to run the `codegenAgent` and collect text output.

## Required env
- `DATABASE_URL_MEMORY` (preferred) or `DATABASE_URL` – Postgres connection for Mastra memory/store.
- Optional, depending on tools/models you enable:
  - `OPENAI_API_KEY`, `OPENROUTER_API_KEY`, `MASTRA_DEFAULT_MODEL`
  - `TAVILY_API_KEY` (web search), `FIGMA_PERSONAL_ACCESS_TOKEN` (Figma tools)

## Usage
```ts
import { mastra, runCodegenJob } from '@nexa/mastra';

const result = await runCodegenJob({
  prompt: 'build a todo app',
  projectId: '...',
});
```

API/NestJS should import `mastra` or `runCodegenJob` from this package instead of constructing their own instances.
