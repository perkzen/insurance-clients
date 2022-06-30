import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { InsuranceClientsService } from './insurance-clients.service';
import { CreateInsuranceClientDto } from './dto/create-insurance-client.dto';
import { UpdateInsuranceClientDto } from './dto/update-insurance-client.dto';
import { InsuranceClient } from '../../types/InsuranceClient';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Insurance clients')
@Controller('insurance-clients')
export class InsuranceClientsController {
  constructor(
    private readonly insuranceClientsService: InsuranceClientsService,
  ) {}

  @Post()
  async create(
    @Body() createInsuranceClientDto: CreateInsuranceClientDto,
  ): Promise<InsuranceClient> {
    return await this.insuranceClientsService.create(createInsuranceClientDto);
  }

  @Get()
  async findAll(): Promise<InsuranceClient[]> {
    return await this.insuranceClientsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<InsuranceClient> {
    return await this.insuranceClientsService.findOne(+id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateInsuranceClientDto: UpdateInsuranceClientDto,
  ) {
    return await this.insuranceClientsService.update(
      +id,
      updateInsuranceClientDto,
    );
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.insuranceClientsService.remove(+id);
  }
}
