import { Gender, Relationship, Salary } from '../../types/InsuranceClient';
import { IsEmail, IsEnum, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateInsuranceClientDto {
  @ApiProperty({ required: true })
  @IsString()
  firstName: string;

  @ApiProperty({ required: true })
  @IsString()
  lastName: string;

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
  @IsEnum(Relationship)
  relationshipStatus: Relationship;

  @ApiProperty({ required: true })
  @IsNumber()
  children: number;

  @ApiProperty({ required: true })
  @IsEnum(Salary)
  salaryType: Salary;
}
