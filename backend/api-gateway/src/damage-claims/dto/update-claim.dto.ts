import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { ClaimStatus } from '../../types/DamageClaim';

export class UpdateClaimDto {
  @ApiProperty({ required: true })
  @IsEnum(ClaimStatus)
  status: string;
}
