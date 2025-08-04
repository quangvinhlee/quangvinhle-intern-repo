import { Controller, Post, Body } from '@nestjs/common';
import { InMemoryQueueService } from './inmemory-queue.service';

@Controller('inmemory-queue')
export class InMemoryQueueController {
  constructor(private readonly queueService: InMemoryQueueService) {}

  @Post('add')
  addJob(@Body() data: any) {
    this.queueService.addJob(data);
    return { message: 'Job added', data };
  }
}
