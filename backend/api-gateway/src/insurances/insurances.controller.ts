import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { InsurancesService } from './insurances.service';
import { ApiTags } from '@nestjs/swagger';
import { Insurance } from '../types/Insurance';
import { CreateInsuranceDto } from './dto/create-insurance.dto';

@ApiTags('Insurances')
@Controller('insurances')
export class InsurancesController {
  constructor(private readonly insurancesService: InsurancesService) {}

  @Post()
  async create(@Body() insurance: CreateInsuranceDto): Promise<Insurance> {
    return await this.insurancesService.create(insurance);
  }

  @Get(':id')
  async findByUser(@Param('id') id: string): Promise<Insurance> {
    return await this.insurancesService.findByUser(+id);
  }

  @Get('vehicle/:reg')
  async findByVehicle(@Param('reg') reg: string): Promise<Insurance> {
    return await this.insurancesService.findByVehicle(reg);
  }
}
