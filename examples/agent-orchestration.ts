/**
 * Example: Agent Orchestration
 * Shows how to orchestrate multiple agents for complex tasks
 */

import { generateId } from '@nexa/shared';
import { createAgent, AgentOrchestrator } from '@nexa/agents';

async function main() {
  console.log('🤖 Agent Orchestration Example\n');

  // Create orchestrator
  const orchestrator = new AgentOrchestrator();

  // Create multiple agents
  const agents = [
    createAgent('coding', {
      id: generateId('agent'),
      name: 'Code Generator',
      description: 'Generates code',
      type: 'coding',
      capabilities: ['code-generation'],
      enabled: true,
    }),
    createAgent('analysis', {
      id: generateId('agent'),
      name: 'Code Reviewer',
      description: 'Reviews code quality',
      type: 'analysis',
      capabilities: ['code-review'],
      enabled: true,
    }),
    createAgent('automation', {
      id: generateId('agent'),
      name: 'Test Automator',
      description: 'Automates testing',
      type: 'automation',
      capabilities: ['test-automation'],
      enabled: true,
    }),
  ];

  // Register all agents
  for (const agent of agents) {
    await orchestrator.registerAgent(agent);
    console.log(`✅ Registered: ${agent.config.name}`);
  }

  console.log('\n📋 Executing multi-agent workflow...\n');

  // Execute tasks across agents
  const tasks = [
    { agentId: agents[0].config.id, task: { type: 'generate', input: 'Create login form' } },
    { agentId: agents[1].config.id, task: { type: 'review', input: 'Generated code' } },
    { agentId: agents[2].config.id, task: { type: 'test', input: 'Login form tests' } },
  ];

  for (const { agentId, task } of tasks) {
    const result = await orchestrator.executeTask(agentId, task);
    console.log(`✅ Task completed by ${agentId}`);
    console.log(`   Result: ${result.result}\n`);
  }

  // Cleanup
  await orchestrator.shutdownAll();
  console.log('✅ All agents shut down\n');
}

main().catch(console.error);
