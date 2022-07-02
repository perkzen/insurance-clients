import {
  ClaimStatus,
  Gender,
  IncomeType,
  InsuranceType,
  Married,
  VehicleType,
} from './enums';

export interface Insurance {
  id: number;
  userId: number;
  type: InsuranceType;
  from: string;
  to: string;
  vehicleRegistration: string;
  vehicleType: VehicleType;
  vehicleKm: number;
  speedingTickets: number;
  drunkDrivingTickets: number;
}

export interface InsuranceClient {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  gender: Gender;
  birthday: string;
  married: Married;
  children: number;
  income: IncomeType;
}

export interface FraudPrediction {
  fraud_probability: number;
}

export interface DamageClaim {
  id: number;
  userId: number;
  comment: string;
  insuranceId: number;
  date: string;
  CreatedAt: string;
  Status: ClaimStatus;
}
