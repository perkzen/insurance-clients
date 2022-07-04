export interface FraudPrediction {
  fraud_probability: number;
}

export enum Education {
  NONE = 'none',
  UNIVERSITY = 'university',
  HIGH_SCHOOL = 'high school',
}

export enum IncomeType {
  MINMAL = 'minmal',
  AVERAGE = 'average',
  ABOVE_AVERAGE = 'above average',
  BELOW_AVERAGE = 'below average',
}

export enum Married {
  YES = 1,
  NO = 0,
}

export enum VehicleOwnership {
  BEFORE_2015 = 'before 2015',
  AFTER_2015 = 'after 2015',
}
