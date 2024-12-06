
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

export type BrandDifference = "positive" | "neutral" | "negative";

export interface BrandData {
  id: string,
  name: string,
  marketSharePercent: number,
  sellInVsPyPercent: SellInVsPyPercent,
  trend: boolean,
  details: BrandDetailsData[],
};

export interface BrandSellInData {
  currentQuarter: {
    name: number;
    percent: number;
  };
  ytd: number;
  ytd_previous_month: number;
  difference: BrandDifference;
};

export interface BrandsListResponse {
  id: string;
  marketShare: number;
  nationalMarketShare: number;
  difference: BrandDifference;
  sellIn: BrandSellInData;
};

export interface BrandDetailsResponse {
  brickName: string;
  month: number;
  rollingQ: number;
  ytd: number;
};
