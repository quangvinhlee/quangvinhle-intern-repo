import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class InMemoryQueueService {
  private queue: any[] = [];
  private processing = false;
  private readonly logger = new Logger(InMemoryQueueService.name);

  addJob(data: any) {
    this.queue.push(data);
    this.logger.log(`Job added: ${JSON.stringify(data)}`);
    this.processJobs();
  }

  private async processJobs() {
    if (this.processing) return;
    this.processing = true;
    while (this.queue.length > 0) {
      const job = this.queue.shift();
      await this.handleJob(job);
    }
    this.processing = false;
  }

  private async handleJob(job: any) {
    this.logger.log(`Processing job: ${JSON.stringify(job)}`);
    // Simulate async work
    await new Promise((resolve) => setTimeout(resolve, 1000));
    this.logger.log(`Job done: ${JSON.stringify(job)}`);
  }
}
