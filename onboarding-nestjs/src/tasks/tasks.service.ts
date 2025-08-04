// src/tasks/tasks.service.ts

import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';
import { Task } from './task.interface';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];
  private nextId = 1;

  constructor(@InjectQueue('email-queue') private queue: Queue) {}

  async sendEmail(email: string) {
    await this.queue.add('send-email', { email });
  }

  findAll(): Task[] {
    return this.tasks;
  }

  findOne(id: number): Task | undefined {
    return this.tasks.find((t) => t.id === id);
  }

  create(task: Omit<Task, 'id'>): Task {
    const newTask = { ...task, id: this.nextId++ };
    this.tasks.push(newTask);
    return newTask;
  }

  update(id: number, update: Partial<Omit<Task, 'id'>>): Task | undefined {
    const task = this.findOne(id);
    if (!task) return undefined;
    Object.assign(task, update);
    return task;
  }

  remove(id: number): boolean {
    const idx = this.tasks.findIndex((t) => t.id === id);
    if (idx === -1) return false;
    this.tasks.splice(idx, 1);
    return true;
  }
}
