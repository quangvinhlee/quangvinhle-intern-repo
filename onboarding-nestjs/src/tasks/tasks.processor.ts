// src/tasks/tasks.processor.ts

import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';

@Processor('email-queue')
export class TasksProcessor extends WorkerHost {
  async process(job: Job<{ email: string }>) {
    console.log('Sending email to:', job.data.email);
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate delay
    console.log('Email sent!');
    return { success: true };
  }
}
