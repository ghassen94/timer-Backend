import { PeriodSchema } from './schema/PeriodSchema.schema';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PeriodController } from './period.controller';
import { PeriodService } from './period.service';

@Module({
  imports: [TypeOrmModule.forFeature([PeriodSchema])],
  controllers: [PeriodController],
  providers: [PeriodService],
  exports: [TypeOrmModule],
})
export class PeriodModule {}
