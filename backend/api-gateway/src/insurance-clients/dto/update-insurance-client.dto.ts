import { PartialType } from '@nestjs/swagger';
import { CreateInsuranceClientDto } from './create-insurance-client.dto';

export class UpdateInsuranceClientDto extends PartialType(CreateInsuranceClientDto) {}
