# Quick Start Guide

Get NEXA up and running in minutes!

## ⚡ Prerequisites

Make sure you have these installed:

- **pnpm** >= 8.0.0 ([Install pnpm](https://pnpm.io/installation))
- **Node.js** >= 20.0.0

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/ErKeLost/NEXA.git
cd NEXA
```

### 2. Install Dependencies

```bash
pnpm install
```

This will install dependencies for all workspaces (apps and packages).

## 🎯 Running the Platform

### Start Everything

```bash
pnpm dev
```

This starts both the frontend and backend using Turborepo:

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:3001
- **API Docs**: http://localhost:3001/api/docs

### Start Individual Services

#### Frontend Only

```bash
pnpm dev:web
# or
cd apps/web
pnpm dev
```

#### Backend Only

```bash
pnpm dev:api
# or
cd apps/api
pnpm dev
```

## 🔧 Configuration

### Backend Configuration

1. Copy the environment template:

```bash
cp apps/api/.env.example apps/api/.env.local
```

2. Edit `apps/api/.env.local` with your settings:

```env
DATABASE_URL=postgresql://user:password@localhost:5432/nexa
REDIS_URL=redis://localhost:6379
AUTH_SECRET=your-secret-key
JWT_SECRET=your-jwt-secret
DAYTONA_API_URL=http://localhost:8080
DAYTONA_API_KEY=your-key
```

### Optional Services

For full functionality, you'll need:

#### PostgreSQL (via NeonDB or local)

```bash
# Using Docker
docker run --name nexa-postgres -e POSTGRES_PASSWORD=password -p 5432:5432 -d postgres:15
```

#### Redis

```bash
# Using Docker
docker run --name nexa-redis -p 6379:6379 -d redis:7-alpine
```

## 📦 Working with Packages

### Using Packages in Your Code

The packages are automatically available via workspace protocol:

```typescript
// In any app or package
import { generateId, NEXA_VERSION } from '@nexa/shared';
import { createAgent } from '@nexa/agents';
import { createTool } from '@nexa/tools';
import { createSkill } from '@nexa/skills';
import { createMCPClient } from '@nexa/mcp';
import { createVMManager } from '@nexa/vm';
```

### Building Packages

```bash
# Build all packages (with Turborepo caching)
pnpm build

# Build specific package
cd packages/shared
pnpm build
```

## 🧪 Testing

```bash
# Run all tests
pnpm test

# Run tests for specific package
cd packages/agents
pnpm test
```

## 🎨 Code Quality

```bash
# Format code
pnpm format

# Lint code
pnpm lint

# Type check
pnpm typecheck
```

## 📚 Next Steps

1. **Explore the Documentation**
   - [Architecture Guide](./docs/ARCHITECTURE.md)
   - [Development Guide](./docs/DEVELOPMENT.md)
   - [API Documentation](./docs/API.md)
   - [Ecosystem Guide](./docs/ECOSYSTEM.md)

2. **Try the Examples**
   - Create a custom tool
   - Build an agent workflow
   - Integrate with MCP

3. **Build Your First Feature**
   - Add a new skill
   - Create a custom agent
   - Extend the API

## 🆘 Troubleshooting

### pnpm Installation Issues

```bash
# Update pnpm
pnpm add -g pnpm@latest

# Clear cache
pnpm store prune
```

### Port Already in Use

```bash
# Change ports in configuration
# Frontend: Edit apps/web/package.json dev script
# Backend: Edit apps/api/.env.local PORT variable
```

### Dependencies Issues

```bash
# Clean install
pnpm clean
pnpm install
```

### Build Errors

```bash
# Clean and rebuild
pnpm clean
pnpm install
pnpm build
```

### Turborepo Cache Issues

```bash
# Clear Turbo cache
rm -rf .turbo
pnpm build --force
```

## 💡 Tips

- Use **pnpm dev** during development for hot reload
- Turborepo caches build outputs for faster rebuilds
- Check **http://localhost:3001/api/docs** for API documentation
- All packages support TypeScript for better DX
- Use the monorepo structure to share code easily
- Run `turbo run build --dry` to see the task execution plan

## 🤝 Getting Help

- 📖 Read the [Documentation](./docs/)
- 🐛 Report [Issues](https://github.com/ErKeLost/NEXA/issues)
- 💬 Ask questions in [Discussions](https://github.com/ErKeLost/NEXA/discussions)
- 🌟 Star the [Repository](https://github.com/ErKeLost/NEXA)

---

**Happy Coding with NEXA! 🚀**
