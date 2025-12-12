# Quick Start Guide

Get NEXA up and running in minutes!

## ⚡ Prerequisites

Make sure you have these installed:
- **Bun** >= 1.0.0 ([Install Bun](https://bun.sh/docs/installation))
- **Node.js** >= 20.0.0 (for compatibility)

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/ErKeLost/NEXA.git
cd NEXA
```

### 2. Install Dependencies

```bash
bun install
```

This will install dependencies for all workspaces (apps and packages).

## 🎯 Running the Platform

### Start Everything

```bash
bun dev
```

This starts both the frontend and backend:
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:3001
- **API Docs**: http://localhost:3001/api/docs

### Start Individual Services

#### Frontend Only
```bash
bun dev:web
# or
cd apps/web
bun dev
```

#### Backend Only
```bash
bun dev:api
# or
cd apps/api
bun dev
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
# Build all packages
bun build

# Build specific package
cd packages/shared
bun run build
```

## 🧪 Testing

```bash
# Run all tests
bun test

# Run tests for specific package
cd packages/agents
bun test
```

## 🎨 Code Quality

```bash
# Format code
bun format

# Lint code
bun lint

# Type check
bun typecheck
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

### Bun Installation Issues
```bash
# Update Bun
bun upgrade

# Clear cache
rm -rf ~/.bun/install/cache
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
bun clean
bun install
```

### Build Errors
```bash
# Clean and rebuild
bun clean
bun install
bun build
```

## 💡 Tips

- Use **bun dev** during development for hot reload
- Check **http://localhost:3001/api/docs** for API documentation
- All packages support TypeScript for better DX
- Use the monorepo structure to share code easily

## 🤝 Getting Help

- 📖 Read the [Documentation](./docs/)
- 🐛 Report [Issues](https://github.com/ErKeLost/NEXA/issues)
- 💬 Ask questions in [Discussions](https://github.com/ErKeLost/NEXA/discussions)
- 🌟 Star the [Repository](https://github.com/ErKeLost/NEXA)

---

**Happy Coding with NEXA! 🚀**
