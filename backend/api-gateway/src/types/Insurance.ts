export interface Insurance {
  id: number;
  userId: number;
  firstname: string;
  lastname: string;
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
  Sport = 'sport',
  Sedan = 'sedan',
  SUV = 'suv',
  Truck = 'truck',
  Van = 'van',
  Motorcycle = 'motorcycle',
  Other = 'other',
}
