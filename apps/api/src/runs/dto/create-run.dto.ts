import { z } from 'zod';

export const createRunSchema = z.object({
  projectId: z.string().uuid(),
  prompt: z.string().min(1),
  model: z.string().optional(),
});

export type CreateRunDto = z.infer<typeof createRunSchema>;
