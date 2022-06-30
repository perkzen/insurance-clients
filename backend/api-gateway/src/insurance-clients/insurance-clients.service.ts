import { Injectable } from '@nestjs/common';
import { CreateInsuranceClientDto } from './dto/create-insurance-client.dto';
import { UpdateInsuranceClientDto } from './dto/update-insurance-client.dto';
import axios from 'axios';

import { ConfigService } from '@nestjs/config';

@Injectable()
export class InsuranceClientsService {
  constructor(private configService: ConfigService) {}

  INSURANCE_CLIENTS_MICROSERVICE = this.configService.get(
    'INSURANCE_CLIENTS_SERVICE_URL',
  );

  create(createInsuranceClientDto: CreateInsuranceClientDto) {
    return 'This action adds a new insuranceClient';
  }

  async findAll() {
    return await axios.get(this.INSURANCE_CLIENTS_MICROSERVICE);
  }

  async findOne(id: number) {
    return await axios.get(`${this.INSURANCE_CLIENTS_MICROSERVICE}/${id}`);
  }

  update(id: number, updateInsuranceClientDto: UpdateInsuranceClientDto) {
    return `This action updates a #${id} insuranceClient`;
  }

  remove(id: number) {
    return `This action removes a #${id} insuranceClient`;
  }
}
