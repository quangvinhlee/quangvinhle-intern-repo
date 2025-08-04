import { Controller, UseGuards, Post, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('tasks')
@UseGuards(JwtAuthGuard)
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post('email')
  async sendEmail(@Body() body: { email: string }) {
    await this.tasksService.sendEmail(body.email);
    return { message: 'Job queued' };
  }
}
