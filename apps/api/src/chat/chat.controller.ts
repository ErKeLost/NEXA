import {
  Body,
  Controller,
  NotFoundException,
  Post,
  Get,
  Param,
} from '@nestjs/common';
import { z } from 'zod';
import { DRIZZLE } from '../database/tokens';
import { Inject } from '@nestjs/common';
import { DbInstance } from '../database/database.module';
import { projects } from '../database/schema';
import { runCodegenJob } from '@nexa/mastra';
import { eq } from 'drizzle-orm';

const chatSchema = z.object({
  projectId: z.string().uuid(),
  prompt: z.string().min(1),
  modelId: z.string().optional(),
});

@Controller('chat')
export class ChatController {
  constructor(@Inject(DRIZZLE) private readonly db: DbInstance) {}

  @Post()
  async chat(@Body() body: unknown) {
    const dto = chatSchema.parse(body);
    const [project] =
      (await this.db
        .select()
        .from(projects)
        .where(eq(projects.id, dto.projectId))) || [];
    if (!project) {
      throw new NotFoundException('Project not found');
    }

    const result = await runCodegenJob({
      prompt: dto.prompt,
      projectId: dto.projectId,
      projectName: project.name,
      modelId: dto.modelId,
    });

    return { text: result.text ?? null, raw: result.raw ?? null };
  }

  @Get('projects/:projectId')
  async projectExists(@Param('projectId') projectId: string) {
    const [project] =
      (await this.db
        .select()
        .from(projects)
        .where(eq(projects.id, projectId))) || [];
    if (!project) {
      throw new NotFoundException('Project not found');
    }
    return { ok: true, project };
  }
}
