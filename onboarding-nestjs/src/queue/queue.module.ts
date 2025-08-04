import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';

import { QueueService } from './queue.service';
import { ExampleProcessor } from './queue.processor';
import { QueueController } from './queue.controller';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'example',
    }),
  ],
  controllers: [QueueController],
  providers: [QueueService, ExampleProcessor],
  exports: [QueueService],
})
export class QueueModule {}
