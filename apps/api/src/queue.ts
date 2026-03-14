import { Queue } from "bullmq";
import { Redis } from "ioredis";
import { env } from "./config.js";

export const RUN_QUEUE = "ai-runs";

const connection = new Redis(env.REDIS_URL, {
  maxRetriesPerRequest: null
});

export const runQueue = new Queue(RUN_QUEUE, {
  connection
});

export type RunJobData = {
  runId: string;
  projectId: string;
  prompt: string;
  model?: string;
};
