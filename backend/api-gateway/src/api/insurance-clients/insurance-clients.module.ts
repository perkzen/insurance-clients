import { Module } from '@nestjs/common';
import { InsuranceClientsService } from './insurance-clients.service';
import { InsuranceClientsController } from './insurance-clients.controller';

@Module({
  controllers: [InsuranceClientsController],
  providers: [InsuranceClientsService]
})
export class InsuranceClientsModule {}
