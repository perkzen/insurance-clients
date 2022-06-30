import { Injectable } from '@nestjs/common';
import { CreateInsuranceClientDto } from './dto/create-insurance-client.dto';
import { UpdateInsuranceClientDto } from './dto/update-insurance-client.dto';

@Injectable()
export class InsuranceClientsService {
  create(createInsuranceClientDto: CreateInsuranceClientDto) {
    return 'This action adds a new insuranceClient';
  }

  findAll() {
    return `This action returns all insuranceClients`;
  }

  findOne(id: number) {
    return `This action returns a #${id} insuranceClient`;
  }

  update(id: number, updateInsuranceClientDto: UpdateInsuranceClientDto) {
    return `This action updates a #${id} insuranceClient`;
  }

  remove(id: number) {
    return `This action removes a #${id} insuranceClient`;
  }
}
