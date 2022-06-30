import { Module } from '@nestjs/common';
import { FraudDetectionService } from './fraud-detection.service';
import { FraudDetectionController } from './fraud-detection.controller';

@Module({
  controllers: [FraudDetectionController],
  providers: [FraudDetectionService],
})
export class FraudDetectionModule {}
