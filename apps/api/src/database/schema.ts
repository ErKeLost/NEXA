import { pgTable, serial, text, timestamp, boolean, jsonb } from 'drizzle-orm/pg-core';

// Users table
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  email: text('email').notNull().unique(),
  name: text('name'),
  password: text('password').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Tools table
export const tools = pgTable('tools', {
  id: serial('id').primaryKey(),
  toolId: text('tool_id').notNull().unique(),
  name: text('name').notNull(),
  description: text('description'),
  version: text('version').notNull(),
  enabled: boolean('enabled').default(true).notNull(),
  metadata: jsonb('metadata'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Agents table
export const agents = pgTable('agents', {
  id: serial('id').primaryKey(),
  agentId: text('agent_id').notNull().unique(),
  name: text('name').notNull(),
  description: text('description'),
  type: text('type').notNull(),
  capabilities: jsonb('capabilities'),
  enabled: boolean('enabled').default(true).notNull(),
  metadata: jsonb('metadata'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Skills table
export const skills = pgTable('skills', {
  id: serial('id').primaryKey(),
  skillId: text('skill_id').notNull().unique(),
  name: text('name').notNull(),
  description: text('description'),
  category: text('category').notNull(),
  enabled: boolean('enabled').default(true).notNull(),
  metadata: jsonb('metadata'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// MCP Configs table
export const mcpConfigs = pgTable('mcp_configs', {
  id: serial('id').primaryKey(),
  mcpId: text('mcp_id').notNull().unique(),
  name: text('name').notNull(),
  protocol: text('protocol').notNull(),
  version: text('version').notNull(),
  enabled: boolean('enabled').default(true).notNull(),
  metadata: jsonb('metadata'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// VM Instances table
export const vmInstances = pgTable('vm_instances', {
  id: serial('id').primaryKey(),
  vmId: text('vm_id').notNull().unique(),
  name: text('name').notNull(),
  image: text('image').notNull(),
  status: text('status').notNull(),
  ipAddress: text('ip_address'),
  config: jsonb('config'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
