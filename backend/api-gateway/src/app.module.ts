import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InsuranceClientsModule } from './api/insurance-clients/insurance-clients.module';
import { ConfigModule } from '@nestjs/config';
import { DamageClaimsModule } from './api/damage-claims/damage-claims.module';
import { InsurancesModule } from './api/insurances/insurances.module';
import { FraudDetectionModule } from './api/fraud-detection/fraud-detection.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `${process.cwd()}/.env`,
      isGlobal: true,
    }),
    InsuranceClientsModule,
    DamageClaimsModule,
    InsurancesModule,
    FraudDetectionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
