import { Inject } from '@nestjs/common';
import { Processor, Process } from '@nestjs/bullmq';
import { Job } from 'bullmq';
import { eq } from 'drizzle-orm';
import { RUN_QUEUE } from '../mq/queues';
import { DRIZZLE } from '../database/tokens';
import { DbInstance } from '../database/database.module';
import { projects, runs } from '../database/schema';
import type { RunJobData } from './runs.service';
import { runCodegenJob } from '@nexa/agents';

@Processor(RUN_QUEUE)
export class RunsProcessor {
  constructor(@Inject(DRIZZLE) private readonly db: DbInstance) {}

  @Process('execute')
  async handle(job: Job<RunJobData>) {
    const { runId, prompt, projectId, model } = job.data;

    await this.db
      .update(runs)
      .set({ status: 'running', startedAt: new Date() })
      .where(eq(runs.id, runId));

    try {
      const [project] =
        (await this.db
          .select()
          .from(projects)
          .where(eq(projects.id, projectId))) || [];
      if (!project) {
        throw new Error(`Project not found for run ${runId}`);
      }

      const result = await runCodegenJob({
        prompt,
        projectId,
        projectName: project.name,
        modelId: model ?? undefined,
      });

      await this.db
        .update(runs)
        .set({
          status: 'completed',
          finishedAt: new Date(),
          result: result?.text ?? result?.raw ?? null,
        })
        .where(eq(runs.id, runId));

      return result;
    } catch (error) {
      await this.db
        .update(runs)
        .set({
          status: 'failed',
          finishedAt: new Date(),
          error: this.serializeError(error),
        })
        .where(eq(runs.id, runId));
      throw error;
    }
  }

  private serializeError(error: unknown) {
    if (error instanceof Error) {
      return { message: error.message, stack: error.stack };
    }
    return { message: String(error) };
  }
}
