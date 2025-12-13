import { Module } from '@nestjs/common';
import { RunsController } from './runs.controller';
import { RunsService } from './runs.service';
import { RunsProcessor } from './runs.processor';

@Module({
  controllers: [RunsController],
  providers: [RunsService, RunsProcessor],
})
export class RunsModule {}
