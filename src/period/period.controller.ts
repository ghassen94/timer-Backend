import { AddPeriodDto } from './dto/addPeriodDto.dto';
import { Period } from 'src/typeorm';
import { PeriodService } from './period.service';
import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ApiProperty, ApiTags } from '@nestjs/swagger';

@ApiTags('period')
@Controller('period')
export class PeriodController {
    constructor(
        @InjectRepository(Period)
        private readonly periodRepository: Period,
        private readonly periodService: PeriodService,
    ) { }
    
    @Get('getTodayTimers')
   
    async getTimers(@Res() res) {
        try {
            let times = await this.periodService.getTodayTimes()
            return res.status(HttpStatus.OK).json({
                status: HttpStatus.OK,
                times
            })
        } catch (error) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                error: error.message
            })
        }
    }

    @Post("saveTodayTimers")
    @ApiProperty()
    async saveTimers(@Res() res, @Body() body: AddPeriodDto) {
        const { index, hour, minute, second, startAt, endAt, createdAt } = body

        try {
            // créer une instance period
            const period: Period = new Period();
            period.index = index;
            period.hour = hour;
            period.minute = minute;
            period.second = second;
            period.startAt = startAt;
            period.endAt = endAt;
            period.createdAt = createdAt

            // create time
            const createTime = await this.periodService.saveTodayTimes(period)
            return res.status(HttpStatus.CREATED).json({
                code: HttpStatus.CREATED,
                message: "time created",
                time : createTime
            })
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                code: HttpStatus.BAD_REQUEST,
                error : error,
                message : "Create time failed"
            })
        }
    }
}
