import { HttpException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { DamageClaim } from '../../types/DamageClaim';
import { CreateClaimDto } from './dto/create-claim.dto';
import { UpdateClaimDto } from './dto/update-claim.dto';

@Injectable()
export class DamageClaimsService {
  constructor(private configService: ConfigService) {}

  DAMAGE_CLAIM_MICROSERVICE = this.configService.get(
    'DAMAGE_CLAIM_SERVICE_URL',
  );

  async Submit(claim: CreateClaimDto): Promise<DamageClaim> {
    try {
      const { data } = await axios.post(
        `${this.DAMAGE_CLAIM_MICROSERVICE}/submit`,
        claim,
      );
      return data;
    } catch (e) {
      throw new HttpException(e.response.data.message, e.response.status);
    }
  }

  async Review(id: number, dto: UpdateClaimDto): Promise<DamageClaim> {
    try {
      const { data } = await axios.put(
        `${this.DAMAGE_CLAIM_MICROSERVICE}/review/${id}`,
        dto,
      );
      return data;
    } catch (e) {
      throw new HttpException(e.response.data.message, e.response.status);
    }
  }

  async FindOne(id: number): Promise<DamageClaim> {
    try {
      const { data } = await axios.get(
        `${this.DAMAGE_CLAIM_MICROSERVICE}/${id}`,
      );
      return data;
    } catch (e) {
      throw new HttpException(e.response.data.message, e.response.status);
    }
  }
}
