import { createStep, createWorkflow } from '@mastra/core/workflows';
import { z } from 'zod';

// A minimal example workflow demonstrating step chaining.
const formatStep = createStep({
  id: 'format-message',
  inputSchema: z.object({
    message: z.string(),
  }),
  outputSchema: z.object({
    formatted: z.string(),
  }),
  execute: async ({ inputData }) => {
    return { formatted: inputData.message.trim().toUpperCase() };
  },
});

const emphasizeStep = createStep({
  id: 'emphasize',
  inputSchema: z.object({
    formatted: z.string(),
  }),
  outputSchema: z.object({
    emphasized: z.string(),
  }),
  execute: async ({ inputData }) => {
    return { emphasized: `${inputData.formatted}!` };
  },
});

export const exampleWorkflow = createWorkflow({
  id: 'example-workflow',
  inputSchema: z.object({
    message: z.string(),
  }),
  outputSchema: z.object({
    emphasized: z.string(),
  }),
})
  .then(formatStep)
  .then(emphasizeStep)
  .commit();
