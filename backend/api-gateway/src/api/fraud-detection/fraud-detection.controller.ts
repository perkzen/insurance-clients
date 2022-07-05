import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { FraudDetectionService } from './fraud-detection.service';
import { ApiTags } from '@nestjs/swagger';
import { CreatePredictionDto } from './dto/create-prediction.dto';
import { FraudPrediction } from '../../types/FraudPrediction';
import { AuthGuard } from '../../guards/auth.guard';

@ApiTags('Fraud detection')
@UseGuards(AuthGuard)
@Controller('fraud-detection')
export class FraudDetectionController {
  constructor(private readonly fraudDetectionService: FraudDetectionService) {}

  @Post()
  async makePrediction(
    @Body() dto: CreatePredictionDto,
  ): Promise<FraudPrediction> {
    return await this.fraudDetectionService.Predict(dto);
  }
}
