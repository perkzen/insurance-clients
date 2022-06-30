import { HttpException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { DamageClaim } from '../types/DamageClaim';
import { CreateClaimDto } from './dto/create-claim.dto';

@Injectable()
export class DamageClaimsService {
  constructor(private configService: ConfigService) {}

  DAMAGE_CLAIM_MICROSERVICE = this.configService.get(
    'COMPENSATION_MANAGER_SERVICE_URL',
  );

  async Submit(claim: CreateClaimDto): Promise<DamageClaim> {
    try {
      const { data } = await axios.post(this.DAMAGE_CLAIM_MICROSERVICE, claim);
      return data;
    } catch (e) {
      throw new HttpException(e.response.data.message, e.response.status);
    }
  }
}
