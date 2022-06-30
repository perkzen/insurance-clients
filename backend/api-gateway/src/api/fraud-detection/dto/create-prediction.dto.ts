import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsString } from 'class-validator';
import { Gender } from '../../../types/InsuranceClient';
import { Education, IncomeType, Married } from '../../../types/FraudPrediction';

export class CreatePredictionDto {
  @ApiProperty({ required: true })
  @IsString()
  AGE: string;

  @ApiProperty({ required: true })
  @IsEnum(Gender)
  GENDER: Gender;

  @ApiProperty({ required: true })
  @IsString()
  DRIVING_EXPERIENCE: string;

  @ApiProperty({ required: true })
  @IsEnum(Education)
  EDUCATION: Education;

  @ApiProperty({ required: true })
  @IsNumber()
  VEHICLE_OWNERSHIP: number;

  @ApiProperty({ required: true })
  @IsString()
  VEHICLE_YEAR: string;

  @ApiProperty({ required: true })
  @IsString()
  VEHICLE_TYPE: string;

  @ApiProperty({ required: true })
  @IsEnum(Married)
  MARRIED: Married;

  @ApiProperty({ required: true })
  @IsNumber()
  CHILDREN: number;

  @ApiProperty({ required: true })
  @IsNumber()
  SPEEDING_VIOLATIONS: number;

  @ApiProperty({ required: true })
  @IsNumber()
  DUIS: number;

  @ApiProperty({ required: true })
  @IsNumber()
  PAST_ACCIDENTS: number;

  @ApiProperty({ required: true })
  @IsEnum(IncomeType)
  INCOME: IncomeType;

  @ApiProperty({ required: true })
  @IsNumber()
  ANNUAL_KM: number;
}
