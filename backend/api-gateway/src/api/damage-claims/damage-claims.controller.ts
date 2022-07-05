import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { DamageClaimsService } from './damage-claims.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateClaimDto } from './dto/create-claim.dto';
import { DamageClaim } from '../../types/DamageClaim';
import { UpdateClaimDto } from './dto/update-claim.dto';
import { AuthGuard } from '../../guards/auth.guard';

@ApiTags('Damage claims')
@UseGuards(AuthGuard)
@Controller('damage-claims')
export class DamageClaimsController {
  constructor(private readonly damageClaimsService: DamageClaimsService) {}

  @Post('submit')
  async create(@Body() claim: CreateClaimDto): Promise<DamageClaim> {
    return await this.damageClaimsService.Submit(claim);
  }

  @Put('review/:id')
  async review(
    @Param('id') id: number,
    @Body() dto: UpdateClaimDto,
  ): Promise<DamageClaim> {
    return await this.damageClaimsService.Review(id, dto);
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<DamageClaim> {
    return await this.damageClaimsService.FindOne(id);
  }

  @Get()
  async findAll(): Promise<DamageClaim[]> {
    return await this.damageClaimsService.FindAll();
  }
}
