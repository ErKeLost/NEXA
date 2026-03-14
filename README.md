# NEXA

NEXA is a pnpm monorepo for an AI coding workspace built around a Vite frontend, a lightweight Node API, a background worker, and reusable Mastra-based packages.

## Structure

```text
NEXA/
├── apps/
│   ├── web/       # Vite + React frontend
│   ├── api/       # Hono-based HTTP API
│   └── worker/    # BullMQ worker
├── packages/
│   ├── agents/
│   ├── mastra/
│   ├── tools/
│   └── shared/
└── docs/
```

## Stack

- Frontend: Vite, React 19, Tailwind CSS 4, shadcn/ui
- Backend: Node 20+, Hono, Drizzle, Neon, BullMQ, Redis
- AI runtime: Mastra, OpenAI/OpenRouter-compatible agents and tools
- Workspace: pnpm workspaces

## Commands

```bash
pnpm install
pnpm dev
pnpm build
pnpm typecheck
```

Useful filters:

```bash
pnpm dev:web
pnpm dev:api
pnpm dev:worker
```

## Notes

- `apps/web` no longer uses Next.js.
- `apps/api` no longer uses NestJS.
- The reusable business logic stays in `packages/*`.
- If you want to adopt Vite+ later, this layout is ready for `vp run` style task orchestration.
