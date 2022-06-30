import { Body, Controller, Post } from '@nestjs/common';
import { DamageClaimsService } from './damage-claims.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateClaimDto } from './dto/create-claim.dto';
import { DamageClaim } from '../types/DamageClaim';

@ApiTags('Damage claims')
@Controller('damage-claims')
export class DamageClaimsController {
  constructor(private readonly damageClaimsService: DamageClaimsService) {}

  @Post()
  async create(@Body() claim: CreateClaimDto): Promise<DamageClaim> {
    return await this.damageClaimsService.Submit(claim);
  }
}
