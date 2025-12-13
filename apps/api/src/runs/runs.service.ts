import { Inject, Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';
import { eq } from 'drizzle-orm';
import { DRIZZLE } from '../database/tokens';
import { DbInstance } from '../database/database.module';
import { runs, RunRow } from '../database/schema';
import { RUN_QUEUE } from '../mq/queues';
import { CreateRunDto } from './dto/create-run.dto';

export interface RunJobData {
  runId: string;
  projectId: string;
  prompt: string;
  model?: string;
}

@Injectable()
export class RunsService {
  constructor(
    @Inject(DRIZZLE) private readonly db: DbInstance,
    @InjectQueue(RUN_QUEUE) private readonly runQueue: Queue<RunJobData>,
  ) {}

  async enqueueRun(dto: CreateRunDto): Promise<RunRow> {
    const [run] = await this.db
      .insert(runs)
      .values({
        projectId: dto.projectId,
        prompt: dto.prompt,
        model: dto.model ?? null,
      })
      .returning();

    await this.runQueue.add(
      'execute',
      {
        runId: run.id,
        projectId: dto.projectId,
        prompt: dto.prompt,
        model: dto.model,
      },
      {
        removeOnComplete: true,
      },
    );

    return run;
  }

  async findOne(runId: string): Promise<RunRow | null> {
    const [run] = await this.db.select().from(runs).where(eq(runs.id, runId));
    return run ?? null;
  }
}
