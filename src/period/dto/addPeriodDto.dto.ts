import { ApiProperty } from "@nestjs/swagger"
import { IsNumber, IsNotEmpty, IsString, IsDate } from "class-validator"

export class AddPeriodDto {
    @ApiProperty({ type: Number })
    @IsNotEmpty()
    @IsNumber()
    index
    
    @ApiProperty({ type: Number })
    @IsNotEmpty()
    @IsNumber()
    hour
    
    @ApiProperty({ type: Number })
    @IsNotEmpty()
    @IsNumber()
    minute
    
    @ApiProperty({ type: Number })
    @IsNotEmpty()
    @IsNumber()
    second
    
    @ApiProperty({ type: String })
    @IsNotEmpty()
    @IsString()
    startAt
    
    @ApiProperty({ type: String })
    @IsNotEmpty()
    @IsString()
    endAt
    
    @ApiProperty({ type: Date })
    @IsNotEmpty()
    @IsDate()
    createdAt
}