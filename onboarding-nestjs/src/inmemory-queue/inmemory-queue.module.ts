import { Module } from '@nestjs/common';
import { InMemoryQueueService } from './inmemory-queue.service';
import { InMemoryQueueController } from './inmemory-queue.controller';

@Module({
  providers: [InMemoryQueueService],
  controllers: [InMemoryQueueController],
})
export class InMemoryQueueModule {}
