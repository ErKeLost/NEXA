import "dotenv/config";
import { Worker } from "bullmq";
import { Redis } from "ioredis";
import { eq } from "drizzle-orm";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { runCodegenJob } from "@nexa/mastra";
import * as schema from "./schema.js";

const redisUrl = process.env.REDIS_URL;
const neonUrl = process.env.NEON_DATABASE_URL;

if (!redisUrl) {
  throw new Error("REDIS_URL is required");
}

if (!neonUrl) {
  throw new Error("NEON_DATABASE_URL is required");
}

const connection = new Redis(redisUrl, {
  maxRetriesPerRequest: null
});

const db = drizzle(neon(neonUrl), { schema });

const worker = new Worker(
  "ai-runs",
  async (job) => {
    const { runId, prompt, projectId, model } = job.data as {
      runId: string;
      projectId: string;
      prompt: string;
      model?: string;
    };

    await db
      .update(schema.runs)
      .set({ status: "running", startedAt: new Date() })
      .where(eq(schema.runs.id, runId));

    try {
      const [project] = await db
        .select()
        .from(schema.projects)
        .where(eq(schema.projects.id, projectId));

      if (!project) {
        throw new Error(`Project not found for run ${runId}`);
      }

      const result = await runCodegenJob({
        prompt,
        projectId,
        projectName: project.name,
        modelId: model ?? undefined
      });

      await db
        .update(schema.runs)
        .set({
          status: "completed",
          finishedAt: new Date(),
          result: result.text ?? result.raw ?? null
        })
        .where(eq(schema.runs.id, runId));

      return result;
    } catch (error) {
      await db
        .update(schema.runs)
        .set({
          status: "failed",
          finishedAt: new Date(),
          error:
            error instanceof Error
              ? { message: error.message, stack: error.stack }
              : { message: String(error) }
        })
        .where(eq(schema.runs.id, runId));

      throw error;
    }
  },
  {
    connection
  }
);

worker.on("ready", () => {
  console.log("nexa-worker is ready");
});

worker.on("failed", (job, error) => {
  console.error(`job ${job?.id ?? "unknown"} failed`, error);
});
