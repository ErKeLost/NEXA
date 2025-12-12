# Development Guide

## Getting Started

### Prerequisites

- Bun >= 1.0.0
- Node.js >= 20.0.0
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/ErKeLost/NEXA.git
cd NEXA

# Install dependencies
bun install
```

## Development Workflow

### Running the Development Environment

```bash
# Start all services (frontend + backend)
bun dev

# Or start individually
bun dev:web    # Frontend only (http://localhost:3000)
bun dev:api    # Backend only (http://localhost:3001)
```

### Building

```bash
# Build all packages
bun build

# Build specific app
bun build:web
bun build:api
```

### Testing

```bash
# Run all tests
bun test

# Run tests for specific package
cd packages/shared
bun test
```

### Linting and Formatting

```bash
# Lint all packages
bun lint

# Format code
bun format

# Type check
bun typecheck
```

## Package Development

### Creating a New Package

1. Create package directory:
```bash
mkdir -p packages/my-package/src
```

2. Create `package.json`:
```json
{
  "name": "@nexa/my-package",
  "version": "0.1.0",
  "private": true,
  "main": "./src/index.ts",
  "types": "./src/index.ts",
  "scripts": {
    "build": "tsc",
    "dev": "tsc --watch",
    "clean": "rm -rf dist node_modules",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "@nexa/shared": "workspace:*"
  },
  "devDependencies": {
    "typescript": "^5.3.3"
  }
}
```

3. Create `tsconfig.json`:
```json
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

4. Create `src/index.ts` with your code

### Adding Dependencies

```bash
# Add to root
bun add -d <package>

# Add to specific workspace
cd apps/web
bun add <package>
```

### Using Workspace Dependencies

```json
{
  "dependencies": {
    "@nexa/shared": "workspace:*"
  }
}
```

## Frontend Development

### Next.js App Structure

```
apps/web/
├── src/
│   ├── app/              # App Router
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Home page
│   │   └── globals.css   # Global styles
│   └── components/       # Shared components
├── public/               # Static assets
├── next.config.js        # Next.js config
└── tailwind.config.js    # Tailwind config
```

### Adding a New Page

1. Create file in `apps/web/src/app/`:
```tsx
// apps/web/src/app/tools/page.tsx
export default function ToolsPage() {
  return (
    <div>
      <h1>Tools</h1>
    </div>
  );
}
```

2. Access at `http://localhost:3000/tools`

### Using Shared Packages

```tsx
import { generateId } from '@nexa/shared';

export default function Component() {
  const id = generateId('component');
  // ...
}
```

## Backend Development

### NestJS Module Structure

```
apps/api/src/
├── modules/
│   ├── auth/
│   ├── tools/
│   ├── agents/
│   └── mcp/
├── config/
├── database/
├── app.module.ts
└── main.ts
```

### Creating a New Module

```bash
cd apps/api
nest generate module modules/my-module
nest generate controller modules/my-module
nest generate service modules/my-module
```

### Using Packages in Backend

```typescript
import { AgentOrchestrator } from '@nexa/agents';
import { createTool } from '@nexa/tools';

@Injectable()
export class MyService {
  private orchestrator = new AgentOrchestrator();

  async executeTool() {
    const tool = createTool('formatter', config);
    return await tool.run(params);
  }
}
```

## Database Development

### Drizzle ORM Setup

1. Create schema file:
```typescript
// apps/api/src/database/schema.ts
import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  email: text('email').notNull().unique(),
  name: text('name'),
  createdAt: timestamp('created_at').defaultNow(),
});
```

2. Generate migration:
```bash
cd apps/api
bun run drizzle-kit generate:pg
```

3. Run migration:
```bash
bun run drizzle-kit push:pg
```

## Environment Variables

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

### Backend (apps/api/.env.local)
```env
DATABASE_URL=postgresql://...
REDIS_URL=redis://localhost:6379
AUTH_SECRET=...
JWT_SECRET=...
DAYTONA_API_URL=...
DAYTONA_API_KEY=...
```

## Debugging

### Frontend
- Use React DevTools
- Check browser console
- Next.js error overlay

### Backend
- Use NestJS Logger
- Check terminal output
- API docs at `/api/docs`

### VSCode Debug Configuration

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Debug API",
      "cwd": "${workspaceFolder}/apps/api",
      "runtimeExecutable": "bun",
      "runtimeArgs": ["run", "start:debug"]
    }
  ]
}
```

## Best Practices

1. **Type Everything**: Use TypeScript types for all code
2. **Shared Code**: Put common code in `@nexa/shared`
3. **Error Handling**: Always handle errors gracefully
4. **Documentation**: Document public APIs
5. **Testing**: Write tests for critical paths
6. **Git Commits**: Use conventional commits

## Troubleshooting

### Bun Installation Issues
```bash
# Update Bun
bun upgrade

# Clear cache
rm -rf ~/.bun/install/cache
```

### TypeScript Errors
```bash
# Clean and rebuild
bun clean
bun install
bun typecheck
```

### Next.js Build Issues
```bash
cd apps/web
rm -rf .next
bun run build
```

## Resources

- [Bun Documentation](https://bun.sh/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [NestJS Documentation](https://docs.nestjs.com)
- [Drizzle ORM Documentation](https://orm.drizzle.team/docs)
