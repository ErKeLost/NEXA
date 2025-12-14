import { mastra } from '../instance';

/**
 * Convenience helper to run a registered workflow by id.
 */
export async function runWorkflow<TInput, TOutput>(
  workflowId: string,
  inputData: TInput,
): Promise<TOutput> {
  const workflow = mastra.getWorkflow(workflowId);
  if (!workflow) {
    throw new Error(`Workflow "${workflowId}" is not registered`);
  }
  const run = await workflow.createRunAsync();
  const result = await run.start({ inputData });
  return result as TOutput;
}
