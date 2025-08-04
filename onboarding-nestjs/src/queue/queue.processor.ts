import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';

@Processor('example')
export class ExampleProcessor extends WorkerHost {
  async process(job: Job<any, any, string>) {
    console.log('Processing job:', job.data);
    // Do background work here
  }
}
