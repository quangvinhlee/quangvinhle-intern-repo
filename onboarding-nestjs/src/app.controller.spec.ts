import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { TasksService } from './tasks/tasks.service';

describe('AppController', () => {
  let controller: AppController;
  let tasksService: TasksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        {
          provide: TasksService,
          useValue: { sendEmail: jest.fn() },
        },
      ],
    }).compile();

    controller = module.get<AppController>(AppController);
    tasksService = module.get<TasksService>(TasksService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should queue an email job', async () => {
    const spy = jest
      .spyOn(tasksService, 'sendEmail')
      .mockResolvedValue(undefined);
    const result = await controller.sendEmail({ email: 'test@example.com' });
    expect(spy).toHaveBeenCalledWith('test@example.com');
    expect(result).toEqual({ message: 'Job queued' });
  });
});
