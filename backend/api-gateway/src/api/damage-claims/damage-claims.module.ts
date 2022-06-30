import { Module } from '@nestjs/common';
import { DamageClaimsService } from './damage-claims.service';
import { DamageClaimsController } from './damage-claims.controller';

@Module({
  controllers: [DamageClaimsController],
  providers: [DamageClaimsService]
})
export class DamageClaimsModule {}
