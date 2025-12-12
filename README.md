# NEXA

**Next + Intelligence + Action**

NEXA is a comprehensive AI coding ecosystem platform built on a modern monorepo architecture. It provides a browser-based development environment similar to Cursor, with an extensible ecosystem of tools, agents, MCP integrations, and skills.

## 🌟 Features

- **🛠️ Tools Ecosystem**: Powerful development tools for code generation, formatting, linting, building, and testing
- **🤖 Agents Ecosystem**: Intelligent AI agents for coding, analysis, and automation workflows
- **🔌 MCP Integration**: Model Context Protocol support for seamless AI model interactions
- **⚡ Skills System**: Extensible skills for code generation, analysis, and refactoring
- **💻 VM Integration**: Isolated development environments powered by Daytona
- **🎨 Modern Stack**: Built with Next.js, NestJS, Bun, and TypeScript

## 📦 Project Structure

```
NEXA/
├── apps/
│   ├── web/          # Next.js frontend application
│   └── api/          # NestJS backend application
├── packages/
│   ├── shared/       # Shared types, utilities, and constants
│   ├── mcp/          # Model Context Protocol integration
│   ├── skills/       # Skills ecosystem
│   ├── tools/        # Development tools
│   ├── agents/       # AI agents
│   └── vm/           # Virtual machine integration (Daytona)
└── docs/             # Documentation
```

## 🚀 Tech Stack

### Frontend
- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript

### Backend
- **Framework**: NestJS
- **Database**: NeonDB (PostgreSQL) with Drizzle ORM
- **Authentication**: Better-Auth
- **Agent Framework**: Mastra
- **Queue**: BullMQ (Redis)
- **VM**: Daytona

### Monorepo
- **Package Manager**: Bun
- **Build System**: Bun workspaces

## 📋 Prerequisites

- **Bun**: >= 1.0.0
- **Node.js**: >= 20.0.0

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/ErKeLost/NEXA.git
cd NEXA
```

2. Install dependencies:
```bash
bun install
```

3. Set up environment variables:
```bash
# For the API
cp apps/api/.env.example apps/api/.env.local
# Edit apps/api/.env.local with your configuration
```

4. Start the development servers:
```bash
# Start all services
bun dev

# Or start individually
bun dev:web    # Frontend only
bun dev:api    # Backend only
```

## 🎯 Development

### Available Scripts

- `bun dev` - Start all development servers
- `bun build` - Build all applications
- `bun test` - Run all tests
- `bun lint` - Lint all packages
- `bun format` - Format code with Prettier
- `bun typecheck` - Type check all packages
- `bun clean` - Clean all build artifacts and dependencies

### Frontend Development

The frontend is accessible at `http://localhost:3000`

```bash
cd apps/web
bun dev
```

### Backend Development

The backend API is accessible at `http://localhost:3001`
API documentation is available at `http://localhost:3001/api/docs`

```bash
cd apps/api
bun dev
```

## 📚 Ecosystem Packages

### @nexa/shared
Common types, utilities, and constants shared across all packages.

### @nexa/mcp
Model Context Protocol integration for AI model interactions.

### @nexa/skills
Extensible skills system including:
- Code generation
- Code analysis
- Refactoring

### @nexa/tools
Development tools including:
- Code formatter
- Linter
- Build tools
- Test runner

### @nexa/agents
AI agents for:
- Automated coding
- Code analysis
- Workflow automation

### @nexa/vm
Virtual machine integration with Daytona for isolated development environments.

## 🏗️ Architecture

NEXA follows a modular monorepo architecture:

1. **Frontend (apps/web)**: Provides the user interface for interacting with the platform
2. **Backend (apps/api)**: RESTful API with GraphQL support for all ecosystem services
3. **Packages**: Reusable modules that can be composed to build applications

## 🔐 Security

- Authentication via Better-Auth
- Secure API endpoints
- Environment variable management
- CORS configuration

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT

## 🙏 Acknowledgments

Built with modern tools and frameworks:
- Next.js
- NestJS
- Bun
- Drizzle ORM
- NeonDB
- Better-Auth
- Mastra
- Daytona
- Redis
- BullMQ

---

**NEXA** - Building the future of AI-powered development 🚀
