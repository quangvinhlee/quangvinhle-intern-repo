// src/tasks/tasks.module.ts

import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';
import { TasksService } from './tasks.service';
import { TasksProcessor } from './tasks.processor';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'email-queue',
      connection: {
        host: 'localhost',
        port: 6379,
      },
    }),
  ],
  providers: [TasksService, TasksProcessor],
  exports: [TasksService],
})
export class TasksModule {}
