import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { createRunSchema } from './dto/create-run.dto';
import { RunsService } from './runs.service';

@Controller('runs')
export class RunsController {
  constructor(private readonly runsService: RunsService) {}

  @Post()
  async createRun(@Body() body: unknown) {
    const dto = createRunSchema.parse(body);
    const run = await this.runsService.enqueueRun(dto);
    return { id: run.id, status: run.status };
  }

  @Get(':id')
  async getRun(@Param('id') id: string) {
    const run = await this.runsService.findOne(id);
    if (!run) {
      throw new NotFoundException('Run not found');
    }
    return run;
  }
}
