import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';

import { Throttle } from '@nestjs/throttler';
import { TasksService } from './tasks.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { Task } from './task.interface';

@Controller('tasks')
@UseGuards(JwtAuthGuard)
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  findAll(): Task[] {
    return this.tasksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Task | undefined {
    return this.tasksService.findOne(Number(id));
  }

  @Post()
  create(@Body() body: { title: string; description?: string }): Task {
    return this.tasksService.create(body);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() body: { title?: string; description?: string },
  ): Task | undefined {
    return this.tasksService.update(Number(id), body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return { success: this.tasksService.remove(Number(id)) };
  }

  @Post('email')
  @Throttle({ default: { limit: 10, ttl: 60000 } })
  async sendEmail(@Body() body: { email: string }) {
    await this.tasksService.sendEmail(body.email);
    return { message: 'Job queued' };
  }
}
