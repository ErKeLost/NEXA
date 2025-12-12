/**
 * Example: Complete NEXA Workflow
 * This example demonstrates how to use all NEXA ecosystems together
 */

import { generateId } from '@nexa/shared';
import { createAgent, AgentOrchestrator } from '@nexa/agents';
import { createTool } from '@nexa/tools';
import { createSkill } from '@nexa/skills';
import { createMCPClient } from '@nexa/mcp';
import { createVMManager } from '@nexa/vm';

async function main() {
  console.log('🚀 NEXA Ecosystem Demo\n');

  // 1. Setup Agent Orchestrator
  console.log('1️⃣  Setting up Agent Orchestrator...');
  const orchestrator = new AgentOrchestrator();

  // 2. Create and register agents
  console.log('2️⃣  Creating agents...');
  
  const codingAgent = createAgent('coding', {
    id: generateId('agent'),
    name: 'Coding Assistant',
    description: 'AI-powered coding agent',
    type: 'coding',
    capabilities: ['code-generation', 'refactoring', 'debugging'],
    enabled: true,
  });

  const analysisAgent = createAgent('analysis', {
    id: generateId('agent'),
    name: 'Code Analyzer',
    description: 'Analyzes code quality and security',
    type: 'analysis',
    capabilities: ['static-analysis', 'security-scan', 'performance'],
    enabled: true,
  });

  await orchestrator.registerAgent(codingAgent);
  await orchestrator.registerAgent(analysisAgent);
  console.log('✅ Agents registered\n');

  // 3. Create skills
  console.log('3️⃣  Setting up skills...');
  
  const codeGenSkill = createSkill('code-generation', {
    id: generateId('skill'),
    name: 'Code Generator',
    description: 'Generates code from natural language',
    category: 'generation',
    enabled: true,
  });

  const analysisSkill = createSkill('code-analysis', {
    id: generateId('skill'),
    name: 'Code Analyzer',
    description: 'Analyzes code structure',
    category: 'analysis',
    enabled: true,
  });

  console.log('✅ Skills created\n');

  // 4. Create tools
  console.log('4️⃣  Setting up tools...');
  
  const formatter = createTool('formatter', {
    id: generateId('tool'),
    name: 'Code Formatter',
    description: 'Formats code according to style guides',
    version: '1.0.0',
    enabled: true,
  });

  const linter = createTool('linter', {
    id: generateId('tool'),
    name: 'Linter',
    description: 'Analyzes code for potential issues',
    version: '1.0.0',
    enabled: true,
  });

  console.log('✅ Tools created\n');

  // 5. Setup MCP client
  console.log('5️⃣  Connecting to MCP...');
  
  const mcpClient = createMCPClient({
    id: generateId('mcp'),
    name: 'AI Model Bridge',
    protocol: 'mcp-v1',
    version: '1.0.0',
    enabled: true,
  });

  await mcpClient.connect();
  console.log('✅ MCP connected\n');

  // 6. Setup VM Manager
  console.log('6️⃣  Setting up VM Manager...');
  
  const vmManager = createVMManager(
    process.env.DAYTONA_API_URL || 'http://localhost:8080',
    process.env.DAYTONA_API_KEY || 'demo-key'
  );

  console.log('✅ VM Manager ready\n');

  // 7. Execute a complete workflow
  console.log('7️⃣  Executing complete workflow...\n');

  // Step 1: Generate code using skill
  console.log('   📝 Generating code...');
  const generatedCode = await codeGenSkill.execute({
    prompt: 'Create a React component for a user profile card',
    language: 'typescript',
  });
  console.log('   ✅ Code generated\n');

  // Step 2: Format the generated code
  console.log('   🎨 Formatting code...');
  const formattedCode = await formatter.run({
    code: generatedCode.code,
    language: 'typescript',
  });
  console.log('   ✅ Code formatted\n');

  // Step 3: Lint the code
  console.log('   🔍 Linting code...');
  const lintResults = await linter.run({
    code: formattedCode.formattedCode,
    rules: ['no-unused-vars', 'prefer-const'],
  });
  console.log('   ✅ Linting complete\n');

  // Step 4: Analyze the code
  console.log('   📊 Analyzing code...');
  const analysisResults = await analysisSkill.execute({
    code: formattedCode.formattedCode,
    language: 'typescript',
  });
  console.log('   ✅ Analysis complete\n');

  // Step 5: Create VM for testing
  console.log('   🖥️  Creating VM instance...');
  const vm = await vmManager.createVM({
    id: generateId('vm'),
    name: 'test-environment',
    image: 'node:20-alpine',
    cpu: 2,
    memory: '4GB',
    storage: '20GB',
  });
  console.log(`   ✅ VM created: ${vm.id}\n`);

  // Step 6: Execute code in VM
  console.log('   ⚙️  Running tests in VM...');
  await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for VM to be ready
  const testResult = await vmManager.executeCommand(
    vm.id,
    'npm test'
  );
  console.log('   ✅ Tests executed\n');

  // Step 7: Send results via MCP
  console.log('   📤 Sending results via MCP...');
  const mcpResponse = await mcpClient.send({
    type: 'workflow-complete',
    data: {
      code: formattedCode.formattedCode,
      lintResults,
      analysisResults,
      testResult,
    },
  });
  console.log('   ✅ Results sent\n');

  // 8. Cleanup
  console.log('8️⃣  Cleaning up...');
  await vmManager.deleteVM(vm.id);
  await mcpClient.disconnect();
  await orchestrator.shutdownAll();
  console.log('✅ Cleanup complete\n');

  // 9. Summary
  console.log('🎉 Workflow completed successfully!\n');
  console.log('Summary:');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('✅ Code generated from natural language');
  console.log('✅ Code formatted and linted');
  console.log('✅ Code analyzed for quality');
  console.log('✅ Tests executed in isolated VM');
  console.log('✅ Results sent via MCP');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
}

// Run the example
main().catch(console.error);
