import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PeriodModule } from './period/period.module';
import entities from './typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'timer',
      entities,
      synchronize: true,
      // autoLoadEntities: true,
    }),
    PeriodModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
