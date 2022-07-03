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

export enum InsuranceType {
  CAR = 'car',
  HOME = 'home',
  LIFE = 'life',
}

export enum VehicleType {
  Family = 'family',
  Sport = 'sport',
  Other = 'other',
}
