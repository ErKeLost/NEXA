# NEXA Examples

This directory contains practical examples demonstrating how to use the NEXA ecosystem.

## Available Examples

### 1. Complete Workflow (`complete-workflow.ts`)

A comprehensive example showing all NEXA ecosystems working together:

- Agent orchestration
- Skill execution
- Tool usage
- MCP integration
- VM management

**Run:**

```bash
pnpm tsx examples/complete-workflow.ts
```

### 2. Agent Orchestration (`agent-orchestration.ts`)

Demonstrates multi-agent coordination:

- Creating multiple specialized agents
- Orchestrating complex workflows
- Task distribution

**Run:**

```bash
pnpm tsx examples/agent-orchestration.ts
```

## Prerequisites

Before running examples:

1. Install dependencies:

```bash
pnpm install
```

2. Set up environment variables (for VM examples):

```bash
export DAYTONA_API_URL=http://localhost:8080
export DAYTONA_API_KEY=your-key
```

## Creating Your Own Examples

1. Create a new TypeScript file in this directory
2. Import the packages you need:

```typescript
import { generateId } from '@nexa/shared';
import { createAgent } from '@nexa/agents';
import { createTool } from '@nexa/tools';
// ... etc
```

3. Write your example code
4. Run with: `pnpm tsx examples/your-example.ts`

## Example Patterns

### Using Tools

```typescript
import { createTool } from '@nexa/tools';

const tool = createTool('formatter', config);
const result = await tool.run(params);
```

### Using Agents

```typescript
import { createAgent } from '@nexa/agents';

const agent = createAgent('coding', config);
await agent.initialize();
const result = await agent.execute(task);
await agent.shutdown();
```

### Using Skills

```typescript
import { createSkill } from '@nexa/skills';

const skill = createSkill('code-generation', config);
const result = await skill.execute(params);
```

### Using MCP

```typescript
import { createMCPClient } from '@nexa/mcp';

const client = createMCPClient(config);
await client.connect();
const response = await client.send(message);
await client.disconnect();
```

### Using VM

```typescript
import { createVMManager } from '@nexa/vm';

const manager = createVMManager(url, key);
const vm = await manager.createVM(config);
const result = await manager.executeCommand(vm.id, 'command');
await manager.deleteVM(vm.id);
```

## Tips

- Always clean up resources (disconnect, shutdown, delete)
- Use `generateId()` for creating unique IDs
- Check the main documentation for detailed API references
- Start with simple examples and build up complexity

## Need Help?

- Check the [Documentation](../docs/)
- Look at the [API Reference](../docs/API.md)
- Read the [Ecosystem Guide](../docs/ECOSYSTEM.md)
