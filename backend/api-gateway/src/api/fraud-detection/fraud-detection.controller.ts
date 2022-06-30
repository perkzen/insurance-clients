import { Body, Controller, Post } from '@nestjs/common';
import { FraudDetectionService } from './fraud-detection.service';
import { ApiTags } from '@nestjs/swagger';
import { CreatePredictionDto } from './dto/create-prediction.dto';
import { FraudPrediction } from '../../types/FraudPrediction';

@ApiTags('Fraud detection')
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
