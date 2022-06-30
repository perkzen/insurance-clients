import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InsuranceClientsModule } from './insurance-clients/insurance-clients.module';

@Module({
  imports: [InsuranceClientsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
