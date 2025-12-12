/**
 * Constants for the NEXA ecosystem
 */

export const NEXA_VERSION = '0.1.0';

export const ECOSYSTEM_TYPES = {
  TOOLS: 'tools',
  AGENTS: 'agents',
  MCP: 'mcp',
  SKILLS: 'skills',
} as const;

export const AGENT_TYPES = {
  CODING: 'coding',
  ANALYSIS: 'analysis',
  AUTOMATION: 'automation',
  CUSTOM: 'custom',
} as const;

export const API_ROUTES = {
  AUTH: '/api/auth',
  TOOLS: '/api/tools',
  AGENTS: '/api/agents',
  MCP: '/api/mcp',
  SKILLS: '/api/skills',
  VM: '/api/vm',
} as const;
