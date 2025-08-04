// src/tasks/tasks.module.ts

import { forwardRef, Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';
import { TasksService } from './tasks.service';
import { TasksProcessor } from './tasks.processor';

import { TasksController } from './tasks.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'email-queue',
      connection: {
        host: 'localhost',
        port: 6379,
      },
    }),
    forwardRef(() => AuthModule),
  ],
  controllers: [TasksController],
  providers: [TasksService, TasksProcessor],
  exports: [TasksService],
})
export class TasksModule {}
