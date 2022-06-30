import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InsuranceClientsService } from './insurance-clients.service';
import { CreateInsuranceClientDto } from './dto/create-insurance-client.dto';
import { UpdateInsuranceClientDto } from './dto/update-insurance-client.dto';

@Controller('insurance-clients')
export class InsuranceClientsController {
  constructor(private readonly insuranceClientsService: InsuranceClientsService) {}

  @Post()
  create(@Body() createInsuranceClientDto: CreateInsuranceClientDto) {
    return this.insuranceClientsService.create(createInsuranceClientDto);
  }

  @Get()
  findAll() {
    return this.insuranceClientsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.insuranceClientsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInsuranceClientDto: UpdateInsuranceClientDto) {
    return this.insuranceClientsService.update(+id, updateInsuranceClientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.insuranceClientsService.remove(+id);
  }
}
