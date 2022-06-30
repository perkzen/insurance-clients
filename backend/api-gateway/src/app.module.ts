import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InsuranceClientsModule } from './insurance-clients/insurance-clients.module';
import { ConfigModule } from '@nestjs/config';
import { DamageClaimsModule } from './damage-claims/damage-claims.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `${process.cwd()}/.env`,
      isGlobal: true,
    }),
    InsuranceClientsModule,
    DamageClaimsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
