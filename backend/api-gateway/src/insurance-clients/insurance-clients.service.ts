import { HttpException, Injectable } from '@nestjs/common';
import { CreateInsuranceClientDto } from './dto/create-insurance-client.dto';
import { UpdateInsuranceClientDto } from './dto/update-insurance-client.dto';
import { ConfigService } from '@nestjs/config';
import { InsuranceClient } from '../types/InsuranceClient';
import axios from 'axios';

@Injectable()
export class InsuranceClientsService {
  constructor(private configService: ConfigService) {}

  INSURANCE_CLIENTS_MICROSERVICE = this.configService.get(
    'INSURANCE_CLIENTS_SERVICE_URL',
  );

  async create(
    createInsuranceClientDto: CreateInsuranceClientDto,
  ): Promise<InsuranceClient> {
    const { data } = await axios.post(
      this.INSURANCE_CLIENTS_MICROSERVICE,
      createInsuranceClientDto,
    );
    return data;
  }

  async findAll(): Promise<InsuranceClient[]> {
    try {
      const { data } = await axios.get(this.INSURANCE_CLIENTS_MICROSERVICE);
      return data;
    } catch (e) {
      throw new HttpException(e.response.data.message, e.response.status);
    }
  }

  async findOne(id: number): Promise<InsuranceClient> {
    try {
      const { data } = await axios.get(
        `${this.INSURANCE_CLIENTS_MICROSERVICE}/${id}`,
      );
      return data;
    } catch (e) {
      throw new HttpException(e.response.data.message, e.response.status);
    }
  }

  async update(
    id: number,
    updateInsuranceClientDto: UpdateInsuranceClientDto,
  ): Promise<InsuranceClient> {
    try {
      const { data } = await axios.put(
        `${this.INSURANCE_CLIENTS_MICROSERVICE}/${id}`,
        updateInsuranceClientDto,
      );
      return data;
    } catch (e) {
      throw new HttpException(e.response.data.message, e.response.status);
    }
  }

  async remove(id: number): Promise<string> {
    try {
      const { data } = await axios.delete(
        `${this.INSURANCE_CLIENTS_MICROSERVICE}/${id}`,
      );
      return data;
    } catch (e) {
      console.log(e);
      throw new HttpException(e.response.data.message, e.response.status);
    }
  }
}
