import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InMemoryQueueModule } from './inmemory-queue/inmemory-queue.module';

@Module({
  imports: [InMemoryQueueModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
