import { RuntimeContext } from '@mastra/core/runtime-context';

export type ProjectContext = {
  projectId: string;
  name?: string | null;
};

export type UserContext = {
  userId: string;
  displayName?: string | null;
};

export type CodegenRuntimeContext = {
  project?: ProjectContext;
  user?: UserContext;
  modelId?: string;
  environmentVariables?: Record<string, string>;
};

export function buildRuntimeContext(
  ctx: CodegenRuntimeContext = {},
): RuntimeContext<CodegenRuntimeContext> {
  const runtime = new RuntimeContext<CodegenRuntimeContext>();
  if (ctx.project) runtime.set('project', ctx.project);
  if (ctx.user) runtime.set('user', ctx.user);
  if (ctx.modelId) runtime.set('modelId', ctx.modelId);
  if (ctx.environmentVariables) runtime.set('environmentVariables', ctx.environmentVariables);
  return runtime;
}
