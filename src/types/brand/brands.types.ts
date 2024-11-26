
export interface SellInVsPyPercent {
  q2: number,
  ytd: number
};

export interface BrandDetailsData {
  venue: string,
  month: number,
  rollingQ: number,
  ytd: number,
};

export interface BrandData {
  id: string,
  name: string,
  marketSharePercent: number,
  sellInVsPyPercent: SellInVsPyPercent,
  trend: boolean,
  details: BrandDetailsData[],
}
