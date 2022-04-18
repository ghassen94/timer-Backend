import { Period } from 'src/typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PeriodService {
    constructor(
        @InjectRepository(Period) private readonly periodRepository: Repository<Period>,
    ) { }

    // get timese for today
    async getTodayTimes(): Promise<Period[]> {
        //format today 
        const now = new Date()
        const y = now.getFullYear()
        const m = now.getMonth()+1
        const d = now.getDate()
        const formattedDate = y + "-" + m + "-" + d
        
        return await this.periodRepository.createQueryBuilder('period').where({createdAt: new Date(formattedDate)}).getMany()
    }

    // save times for today
    async saveTodayTimes(period: Period): Promise<Period> {
        return await this.periodRepository.save(period);
    }

}
