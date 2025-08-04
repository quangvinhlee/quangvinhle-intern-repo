import { Test, TestingModule } from '@nestjs/testing';
import { TasksService } from './tasks.service';
import { getQueueToken } from '@nestjs/bullmq';

describe('TasksService', () => {
  let service: TasksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TasksService,
        {
          provide: getQueueToken('email-queue'),
          useValue: { add: jest.fn() },
        },
      ],
    }).compile();

    service = module.get<TasksService>(TasksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
