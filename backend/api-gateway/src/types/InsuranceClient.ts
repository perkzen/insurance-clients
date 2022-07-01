import { IncomeType } from './FraudPrediction';

export interface InsuranceClient {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  gender: Gender;
  birthday: string;
  married: Relationship;
  children: number;
  income: IncomeType;
}

export enum Relationship {
  MARRIED = 1,
  SINGLE = 0,
}

export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
}
