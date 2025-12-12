/**
 * Base types for the NEXA ecosystem
 */

// Common metadata type for better type safety
export type Metadata = Record<string, unknown>;

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
  metadata?: Metadata;
}

export interface AgentConfig {
  id: string;
  name: string;
  description: string;
  type: 'coding' | 'analysis' | 'automation' | 'custom';
  capabilities: string[];
  enabled: boolean;
  metadata?: Metadata;
}

export interface MCPConfig {
  id: string;
  name: string;
  protocol: string;
  version: string;
  enabled: boolean;
  metadata?: Metadata;
}

export interface SkillConfig {
  id: string;
  name: string;
  description: string;
  category: string;
  enabled: boolean;
  metadata?: Metadata;
}

export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}
