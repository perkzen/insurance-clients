export interface DamageClaim {
  id: number;
  email: string;
  comment: string;
  insuranceType: string;
  date: string;
  submittedAt: string;
  status: ClaimStatus;
}

export enum ClaimStatus {
  SUBMITTED = 'submitted',
  APPROVED = 'approved',
  REJECTED = 'rejected',
}
