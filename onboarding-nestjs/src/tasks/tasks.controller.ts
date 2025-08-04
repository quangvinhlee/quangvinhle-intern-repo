import { Controller, UseGuards, Post, Body } from '@nestjs/common';
import { Throttle } from '@nestjs/throttler';
import { TasksService } from './tasks.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('tasks')
@UseGuards(JwtAuthGuard)
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post('email')
  @Throttle({ default: { limit: 10, ttl: 60000 } })
  async sendEmail(@Body() body: { email: string }) {
    await this.tasksService.sendEmail(body.email);
    return { message: 'Job queued' };
  }
}
