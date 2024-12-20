export type IncreaseDecrease = 'Increase' | 'Decrease';

export interface PharmacyData {
  name: string,
  id: string,
  change: number,
  type: IncreaseDecrease,
  total: number,
  address?: string,
};

export interface PharmacyProfile {
  id: string,
  name: string,
  address: string,
  products: PharmacyData[],
};

export interface ProductPotentials {
  name: string;
  potential: number;
  turnover: number;
}

export interface PharmaciesListResponse {
  name: string;
  address: string;
  productPotentials: ProductPotentials[];
  totalPotential: number;
  totalTurnover: number;
};
