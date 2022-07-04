import { IsEmail, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateClaimDto {
  @ApiProperty({ required: true })
  @IsEmail()
  email: string;

  @ApiProperty({ required: true })
  @IsString()
  comment: string;

  @ApiProperty({ required: true })
  @IsNumber()
  insuranceId: number;

  @ApiProperty({ required: true })
  @IsString()
  date: string;
}
