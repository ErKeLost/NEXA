import { Global, Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RUN_QUEUE } from './queues';

@Global()
@Module({
  imports: [
    ConfigModule,
    BullModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        connection: {
          url: config.getOrThrow<string>('REDIS_URL'),
        },
      }),
    }),
    BullModule.registerQueue({
      name: RUN_QUEUE,
    }),
  ],
  exports: [BullModule],
})
export class MqModule {}
