import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Period {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    index: number 
    
    @Column()
    hour: number;
    
    @Column()
    minute: number;
    
    @Column()
    second: number;
    
    @Column()
    startAt: string;
    
    @Column()
    endAt: string;
    
    @Column({ type: 'date' })
    createdAt: Date;
}