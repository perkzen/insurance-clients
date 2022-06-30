import { HttpException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CreatePredictionDto } from './dto/create-prediction.dto';
import axios from 'axios';
import { FraudPrediction } from '../../types/FraudPrediction';

@Injectable()
export class FraudDetectionService {
  constructor(private configService: ConfigService) {}

  FRAUD_DETECTION_MICROSERVICE = this.configService.get(
    'FRAUD_DETECTION_SERVICE_URL',
  );

  async Predict(dto: CreatePredictionDto): Promise<FraudPrediction> {
    try {
      const { data } = await axios.post(
        `${this.FRAUD_DETECTION_MICROSERVICE}/predict`,
        dto,
      );
      return data;
    } catch (e) {
      throw new HttpException(e.response.data.message, e.response.status);
    }
  }
}
