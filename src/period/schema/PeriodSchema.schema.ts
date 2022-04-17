import { Period } from './../../typeorm/Period';
import { EntitySchema } from "typeorm";

export const PeriodSchema = new EntitySchema<Period>({
    name: 'Period',
    target: Period,
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true
        },
        index: {
            type: Number,
        },
        hour: {
            type: Number,
        },
        minute: {
            type: Number,
        },
        second: {
            type: Number,
        },
        startAt: {
            type: String,
        },
        endAt: {
            type: String,
        },
        createdAt: {
            type: Date
        },
    }
})