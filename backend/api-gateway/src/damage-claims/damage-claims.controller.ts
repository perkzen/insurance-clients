import { Controller } from '@nestjs/common';
import { DamageClaimsService } from './damage-claims.service';

@Controller('damage-claims')
export class DamageClaimsController {
  constructor(private readonly damageClaimsService: DamageClaimsService) {}
}
