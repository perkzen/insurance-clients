import { Controller, Post } from '@nestjs/common';
import { DamageClaimsService } from './damage-claims.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Damage claims')
@Controller('damage-claims')
export class DamageClaimsController {
  constructor(private readonly damageClaimsService: DamageClaimsService) {}

  @Post()
  async create(): Promise<void> {
    await this.damageClaimsService.Submit();
  }
}
