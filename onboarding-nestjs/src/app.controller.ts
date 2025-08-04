// src/app.controller.ts

import { Controller, Post, Body } from '@nestjs/common';
import { TasksService } from './tasks/tasks.service';

@Controller()
export class AppController {
  constructor(private readonly tasksService: TasksService) {}

  @Post('email')
  async sendEmail(@Body() body: { email: string }) {
    await this.tasksService.sendEmail(body.email);
    return { message: 'Job queued' };
  }
}
