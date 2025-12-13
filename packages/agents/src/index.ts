/**
 * NEXA Agents Package
 * Mastra-based agents and helpers for backend execution.
 *
 * - Exports a configured Mastra instance with the codegen agent.
 * - Provides a helper to run codegen jobs from Nest/BullMQ.
 * - Keeps legacy base agent exports for compatibility.
 */

import { AgentConfig } from '@nexa/shared';

export * from './mastra';
export * from './runner';

/**
 * Legacy base agent classes (kept for compatibility with existing imports).
 */
export interface Agent {
  config: AgentConfig;
  initialize(): Promise<void>;
  execute(task: any): Promise<any>;
  shutdown(): Promise<void>;
}

export abstract class BaseAgent implements Agent {
  config: AgentConfig;
  isInitialized: boolean = false;

  constructor(config: AgentConfig) {
    this.config = config;
  }

  async initialize(): Promise<void> {
    console.log(`Initializing agent: ${this.config.name}`);
    this.isInitialized = true;
  }

  abstract execute(task: any): Promise<any>;

  async shutdown(): Promise<void> {
    console.log(`Shutting down agent: ${this.config.name}`);
    this.isInitialized = false;
  }
}
