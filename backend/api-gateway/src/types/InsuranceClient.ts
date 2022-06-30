export interface InsuranceClient {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  gender: Gender;
  birthday: string;
  relationshipStatus: Relationship;
  children: number;
  salaryType: Salary;
}

export enum Relationship {
  MARRIED = 'married',
  SINGLE = 'single',
}

export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
}

export enum Salary {
  LOW = 'low',
  MID = 'mid',
  HIGH = 'high',
}
