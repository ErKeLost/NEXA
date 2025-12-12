/**
 * Base types for the NEXA ecosystem
 */

export interface NexaConfig {
  version: string;
  ecosystem: EcosystemConfig;
}

export interface EcosystemConfig {
  tools: ToolConfig[];
  agents: AgentConfig[];
  mcp: MCPConfig[];
  skills: SkillConfig[];
}

export interface ToolConfig {
  id: string;
  name: string;
  description: string;
  version: string;
  enabled: boolean;
  metadata?: Record<string, any>;
}

export interface AgentConfig {
  id: string;
  name: string;
  description: string;
  type: 'coding' | 'analysis' | 'automation' | 'custom';
  capabilities: string[];
  enabled: boolean;
  metadata?: Record<string, any>;
}

export interface MCPConfig {
  id: string;
  name: string;
  protocol: string;
  version: string;
  enabled: boolean;
  metadata?: Record<string, any>;
}

export interface SkillConfig {
  id: string;
  name: string;
  description: string;
  category: string;
  enabled: boolean;
  metadata?: Record<string, any>;
}

export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}
