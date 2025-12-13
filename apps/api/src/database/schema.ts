import {
  index,
  InferSelectModel,
  jsonb,
  pgTable,
  text,
  timestamp,
  uuid,
} from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(),
  email: text('email').notNull().unique(),
  name: text('name'),
  createdAt: timestamp('created_at', { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const projects = pgTable(
  'projects',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    ownerId: uuid('owner_id')
      .notNull()
      .references(() => users.id),
    name: text('name').notNull(),
    description: text('description'),
    status: text('status').notNull().default('active'),
    createdAt: timestamp('created_at', { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (project) => ({
    ownerIdx: index('projects_owner_idx').on(project.ownerId),
  }),
);

export type RunStatus = 'queued' | 'running' | 'completed' | 'failed';

export const runs = pgTable(
  'runs',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    projectId: uuid('project_id')
      .notNull()
      .references(() => projects.id),
    status: text('status').$type<RunStatus>().notNull().default('queued'),
    model: text('model'),
    prompt: text('prompt').notNull(),
    result: jsonb('result', { mode: 'json' }).$type<unknown>().default(null),
    error: jsonb('error', { mode: 'json' }).$type<unknown>().default(null),
    startedAt: timestamp('started_at', { withTimezone: true }),
    finishedAt: timestamp('finished_at', { withTimezone: true }),
    createdAt: timestamp('created_at', { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (run) => ({
    projectIdx: index('runs_project_idx').on(run.projectId),
    statusIdx: index('runs_status_idx').on(run.status),
  }),
);

export type RunRow = InferSelectModel<typeof runs>;
