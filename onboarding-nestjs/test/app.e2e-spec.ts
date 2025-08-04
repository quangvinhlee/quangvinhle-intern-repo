import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import * as jwt from 'jsonwebtoken';

describe('AppController & TasksController (e2e)', () => {
  let app: INestApplication;
  let server: any;
  let testJwt: string;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }),
    );
    await app.init();
    server = app.getHttpServer();

    testJwt = jwt.sign({ userId: 1, username: 'test' }, 'test-secret');
  });

  afterAll(async () => {
    await app.close();
  });

  it('GET / (should return 404)', async () => {
    await request(server).get('/').expect(404);
  });

  it('POST /auth/login (valid credentials)', async () => {
    const res = await request(server)
      .post('/auth/login')
      .send({ username: 'test', password: 'test' })
      .expect(201);
    expect(res.body).toHaveProperty('access_token');
  });

  it('POST /auth/login (invalid credentials)', async () => {
    await request(server)
      .post('/auth/login')
      .send({ username: 'wrong', password: 'wrong' })
      .expect(401);
  });

  it('POST /tasks/email (valid JWT, valid body)', async () => {
    const res = await request(server)
      .post('/tasks/email')
      .set('Authorization', `Bearer ${testJwt}`)
      .send({ email: 'test@example.com' })
      .expect(201);
    expect(res.body).toHaveProperty('message', 'Job queued');
  });

  it('POST /tasks/email (missing JWT)', async () => {
    await request(server)
      .post('/tasks/email')
      .send({ email: 'test@example.com' })
      .expect(401);
  });

  it('POST /tasks/email (invalid body)', async () => {
    await request(server)
      .post('/tasks/email')
      .set('Authorization', `Bearer ${testJwt}`)
      .send({})
      .expect(400);
  });
});
