# NEXA Ecosystem Guide

## Overview

NEXA provides four core ecosystems that work together to create a powerful AI coding platform:

1. **Tools Ecosystem**
2. **Agents Ecosystem**
3. **MCP (Model Context Protocol) Ecosystem**
4. **Skills Ecosystem**

## Tools Ecosystem

Tools are utilities that perform specific development tasks.

### Available Tools

#### Code Formatter
Formats code according to style guides.

```typescript
import { createTool } from '@nexa/tools';

const formatter = createTool('formatter', {
  id: 'formatter-1',
  name: 'Code Formatter',
  description: 'Format code',
  version: '1.0.0',
  enabled: true,
});

const result = await formatter.run({
  code: 'const x=1;',
  language: 'javascript',
});
```

#### Linter
Analyzes code for potential issues.

#### Build Tool
Builds projects according to configuration.

#### Test Runner
Runs test suites and reports results.

### Creating Custom Tools

```typescript
import { BaseTool, ToolConfig } from '@nexa/tools';

export class MyCustomTool extends BaseTool {
  async run(params: any): Promise<any> {
    // Your tool implementation
    return { result: 'success' };
  }
}
```

## Agents Ecosystem

Agents are autonomous AI systems that can execute complex workflows.

### Available Agents

#### Coding Agent
Generates, modifies, and refactors code.

```typescript
import { createAgent } from '@nexa/agents';

const codingAgent = createAgent('coding', {
  id: 'agent-1',
  name: 'Coding Agent',
  description: 'AI coding assistant',
  type: 'coding',
  capabilities: ['code-generation', 'refactoring'],
  enabled: true,
});

await codingAgent.initialize();
const result = await codingAgent.execute({
  type: 'code-generation',
  input: { prompt: 'Create a React component' },
});
```

#### Analysis Agent
Analyzes code quality, security, and performance.

#### Automation Agent
Automates repetitive development tasks.

### Agent Orchestration

```typescript
import { AgentOrchestrator } from '@nexa/agents';

const orchestrator = new AgentOrchestrator();
await orchestrator.registerAgent(codingAgent);
await orchestrator.registerAgent(analysisAgent);

// Execute tasks across multiple agents
const result = await orchestrator.executeTask('agent-1', task);
```

## MCP Ecosystem

Model Context Protocol enables seamless integration with AI models.

### Using MCP

```typescript
import { createMCPClient } from '@nexa/mcp';

const mcpClient = createMCPClient({
  id: 'mcp-1',
  name: 'OpenAI MCP',
  protocol: 'mcp-v1',
  version: '1.0.0',
  enabled: true,
});

await mcpClient.connect();
const response = await mcpClient.send({
  model: 'gpt-4',
  messages: [{ role: 'user', content: 'Hello!' }],
});
await mcpClient.disconnect();
```

### Supported Protocols

- MCP v1
- Custom protocol adapters

## Skills Ecosystem

Skills extend agents with specific capabilities.

### Available Skills

#### Code Generation
Generates code from natural language.

```typescript
import { createSkill } from '@nexa/skills';

const codeGenSkill = createSkill('code-generation', {
  id: 'skill-1',
  name: 'Code Generation',
  description: 'Generate code from prompts',
  category: 'generation',
  enabled: true,
});

const result = await codeGenSkill.execute({
  prompt: 'Create a user authentication function',
  language: 'typescript',
});
```

#### Code Analysis
Analyzes code structure and quality.

#### Refactoring
Improves code structure while preserving behavior.

### Creating Custom Skills

```typescript
import { BaseSkill, SkillConfig } from '@nexa/skills';

export class MyCustomSkill extends BaseSkill {
  async execute(params: any): Promise<any> {
    // Validate
    if (!this.validate(params)) {
      throw new Error('Invalid parameters');
    }
    
    // Execute
    return { result: 'success' };
  }
  
  validate(params: any): boolean {
    return params && params.required;
  }
}
```

## Integration Examples

### Full Workflow Example

```typescript
import { AgentOrchestrator } from '@nexa/agents';
import { createAgent } from '@nexa/agents';
import { createSkill } from '@nexa/skills';
import { createTool } from '@nexa/tools';

// Setup
const orchestrator = new AgentOrchestrator();

const codingAgent = createAgent('coding', config);
const codeGenSkill = createSkill('code-generation', skillConfig);
const formatter = createTool('formatter', toolConfig);

await orchestrator.registerAgent(codingAgent);

// Execute workflow
const code = await codeGenSkill.execute({
  prompt: 'Create a React component',
  language: 'typescript',
});

const formatted = await formatter.run({
  code: code.code,
  language: 'typescript',
});

console.log('Generated and formatted code:', formatted);
```

### Using VM for Execution

```typescript
import { createVMManager } from '@nexa/vm';

const vmManager = createVMManager(
  process.env.DAYTONA_API_URL!,
  process.env.DAYTONA_API_KEY!
);

// Create isolated environment
const vm = await vmManager.createVM({
  id: 'vm-1',
  name: 'dev-env',
  image: 'node:20',
  cpu: 2,
  memory: '4GB',
  storage: '20GB',
});

// Execute code
const result = await vmManager.executeCommand(vm.id, 'npm test');
console.log('Test results:', result);

// Cleanup
await vmManager.deleteVM(vm.id);
```

## Best Practices

1. **Modular Design**: Use packages independently or compose them
2. **Error Handling**: Always handle errors from async operations
3. **Resource Cleanup**: Close connections and clean up resources
4. **Type Safety**: Leverage TypeScript for type checking
5. **Configuration**: Use environment variables for sensitive data

## Next Steps

- Explore the [API Documentation](./API.md)
- Read the [Architecture Guide](./ARCHITECTURE.md)
- Check out [Development Guide](./DEVELOPMENT.md)
