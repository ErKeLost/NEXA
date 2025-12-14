import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { mastra } from '@nexa/mastra';
import { MASTRA } from './tokens';

@Global()
@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: MASTRA,
      useValue: mastra,
    },
  ],
  exports: [MASTRA],
})
export class AiModule {}
