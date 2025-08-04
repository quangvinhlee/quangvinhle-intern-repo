import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';

@Injectable()
export class QueueService {
  constructor(@InjectQueue('example') private queue: Queue) {}

  async addJob(data: any) {
    await this.queue.add('simple-task', data);
  }
}
