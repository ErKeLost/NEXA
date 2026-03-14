import { mastra } from '../instance';

/**
 * Convenience helper to run a registered workflow by id.
 */
export async function runWorkflow(inputData: { message: string }) {
  const workflow = mastra.getWorkflow('exampleWorkflow');
  if (!workflow) {
    throw new Error('Workflow "exampleWorkflow" is not registered');
  }
  const run = await workflow.createRunAsync();
  return run.start({ inputData });
}
