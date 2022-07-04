import { IsEnum, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { InsuranceType, VehicleType } from '../../../types/Insurance';

export class CreateInsuranceDto {
  @ApiProperty({ required: true })
  @IsNumber()
  userId: number;

  @ApiProperty({ required: true })
  @IsString()
  firstname: string;

  @ApiProperty({ required: true })
  @IsString()
  lastname: string;

  @ApiProperty({ required: true })
  @IsEnum(InsuranceType)
  type: InsuranceType;

  @ApiProperty({ required: true })
  @IsString()
  from: string;

  @ApiProperty({ required: true })
  @IsString()
  to: string;

  @ApiProperty({ required: true })
  @IsString()
  vehicleRegistration: string;

  @ApiProperty({ required: true })
  @IsEnum(VehicleType)
  vehicleType: VehicleType;

  @ApiProperty({ required: true })
  @IsNumber()
  vehicleKm: number;

  @ApiProperty({ required: true })
  @IsNumber()
  speedingTickets: number;

  @ApiProperty({ required: true })
  @IsNumber()
  drunkDrivingTickets: number;
}
