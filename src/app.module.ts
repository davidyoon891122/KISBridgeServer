import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MasterModule } from './master/master.module';

@Module({
  imports: [MasterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
