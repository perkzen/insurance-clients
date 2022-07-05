import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { InsurancesService } from './insurances.service';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { Insurance } from '../../types/Insurance';
import { CreateInsuranceDto } from './dto/create-insurance.dto';
import { AuthGuard } from '../../guards/auth.guard';

@ApiTags('Insurances')
@UseGuards(AuthGuard)
@Controller('insurances')
export class InsurancesController {
  constructor(private readonly insurancesService: InsurancesService) {}

  @Post()
  async create(@Body() insurance: CreateInsuranceDto): Promise<Insurance> {
    return await this.insurancesService.create(insurance);
  }

  @Get()
  async findAll(): Promise<Insurance[]> {
    return await this.insurancesService.findAll();
  }

  @ApiQuery({ name: 'firstname' })
  @ApiQuery({ name: 'lastname' })
  @ApiQuery({ name: 'reg' })
  @Get('filter')
  async filter(
    @Query() query: { firstname: string; lastname: string; reg: string },
  ): Promise<Insurance[]> {
    return await this.insurancesService.filter(query);
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Insurance> {
    return await this.insurancesService.findById(+id);
  }

  // @Get('user/:id')
  // async findByUser(@Param('id') id: string): Promise<Insurance[]> {
  //   return await this.insurancesService.findByUser(+id);
  // }
  //
  // @Get('vehicle/:reg')
  // async findByVehicle(@Param('reg') reg: string): Promise<Insurance[]> {
  //   return await this.insurancesService.findByVehicle(reg);
  // }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() insurance: CreateInsuranceDto,
  ): Promise<Insurance> {
    return await this.insurancesService.update(+id, insurance);
  }
}
