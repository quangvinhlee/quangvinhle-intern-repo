// src/tasks/tasks.service.ts

import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';

@Injectable()
export class TasksService {
  constructor(@InjectQueue('email-queue') private queue: Queue) {}

  async sendEmail(email: string) {
    await this.queue.add('send-email', { email });
  }
}
