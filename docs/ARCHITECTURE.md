# NEXA Architecture

## Overview

NEXA is built as a modular monorepo using pnpm workspaces and Turborepo. The architecture is designed to be scalable, maintainable, and extensible.

## System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        Frontend (Next.js)                    │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐        │
│  │   Tools UI  │  │  Agents UI  │  │   MCP UI    │        │
│  └─────────────┘  └─────────────┘  └─────────────┘        │
└────────────────────────┬────────────────────────────────────┘
                         │
                         │ HTTP/REST API
                         │
┌────────────────────────▼────────────────────────────────────┐
│                     Backend (NestJS)                         │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐        │
│  │ Auth Module │  │ Tools Module│  │ Agents Mod. │        │
│  └─────────────┘  └─────────────┘  └─────────────┘        │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐        │
│  │  MCP Module │  │  VM Module  │  │ Skills Mod. │        │
│  └─────────────┘  └─────────────┘  └─────────────┘        │
└────────────────────────┬────────────────────────────────────┘
                         │
         ┌───────────────┼───────────────┐
         │               │               │
         ▼               ▼               ▼
    ┌────────┐      ┌────────┐     ┌────────┐
    │ NeonDB │      │ Redis  │     │Daytona │
    │(Postgres)│     │ + MQ   │     │  (VM)  │
    └────────┘      └────────┘     └────────┘
```

## Core Packages

### @nexa/shared

- **Purpose**: Common types, utilities, and constants
- **Used By**: All packages
- **Dependencies**: None

### @nexa/mcp

- **Purpose**: Model Context Protocol integration
- **Used By**: API, Agents
- **Dependencies**: @nexa/shared

### @nexa/skills

- **Purpose**: Extensible skills system
- **Used By**: API, Agents
- **Dependencies**: @nexa/shared

### @nexa/tools

- **Purpose**: Development tools
- **Used By**: API, Web
- **Dependencies**: @nexa/shared

### @nexa/agents

- **Purpose**: AI agents orchestration
- **Used By**: API
- **Dependencies**: @nexa/shared, @nexa/tools, @nexa/skills

### @nexa/vm

- **Purpose**: Virtual machine integration
- **Used By**: API
- **Dependencies**: @nexa/shared

## Data Flow

1. **User Request** → Frontend (Next.js)
2. **API Call** → Backend (NestJS)
3. **Business Logic** → Modules (Auth, Tools, Agents, etc.)
4. **Package Integration** → Core packages (@nexa/\*)
5. **Data Persistence** → Database (NeonDB)
6. **Queue Processing** → Redis + BullMQ
7. **VM Operations** → Daytona
8. **Response** → Frontend

## Key Design Principles

1. **Modularity**: Each package has a single responsibility
2. **Extensibility**: Easy to add new tools, agents, and skills
3. **Type Safety**: Full TypeScript coverage
4. **Developer Experience**: Hot reload, fast builds with pnpm and Turborepo
5. **Scalability**: Microservices-ready architecture

## Security Architecture

- **Authentication**: Better-Auth with JWT tokens
- **Authorization**: Role-based access control (RBAC)
- **API Security**: CORS, rate limiting, input validation
- **Secrets Management**: Environment variables
- **VM Isolation**: Containerized execution with Daytona

## Deployment Architecture

```
┌─────────────────┐
│   Vercel Edge   │  ← Next.js Frontend
└─────────────────┘

┌─────────────────┐
│  Railway/Fly.io │  ← NestJS Backend
└─────────────────┘

┌─────────────────┐
│    NeonDB       │  ← PostgreSQL Database
└─────────────────┘

┌─────────────────┐
│  Redis Cloud    │  ← Redis + Queue
└─────────────────┘

┌─────────────────┐
│    Daytona      │  ← VM Infrastructure
└─────────────────┘
```

## Future Enhancements

1. **GraphQL API**: Add GraphQL layer for flexible queries
2. **WebSocket**: Real-time updates for agent execution
3. **Plugin System**: Dynamic plugin loading
4. **Multi-tenancy**: Support for multiple organizations
5. **Analytics**: Usage tracking and insights
