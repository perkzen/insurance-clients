import { Gender } from '../../../types/InsuranceClient';
import { IsEmail, IsEnum, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IncomeType, Married } from '../../../types/FraudPrediction';

export class CreateInsuranceClientDto {
  @ApiProperty({ required: true })
  @IsString()
  firstname: string;

  @ApiProperty({ required: true })
  @IsString()
  lastname: string;

  @ApiProperty({ required: true })
  @IsEmail()
  email: string;

  @ApiProperty({ required: true })
  @IsEnum(Gender)
  gender: Gender;

  @ApiProperty({ required: true })
  @IsString()
  birthday: string;

  @ApiProperty({ required: true })
  @IsEnum(Married)
  married: Married;

  @ApiProperty({ required: true })
  @IsNumber()
  children: number;

  @ApiProperty({ required: true })
  @IsEnum(IncomeType)
  income: IncomeType;
}
