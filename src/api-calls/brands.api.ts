import axios from "axios";

import {
  BrandDetailsResponse,
  BrandsListResponse
} from "../types/brand/brands.types";

export const getBrands = async (page: number, q:string | null | undefined):Promise<BrandsListResponse[]> => {
  /* return [
    {
      id: string,
      marketShare: number,
      nationalMarketShare: number,
      difference: "positive" | "neutral" | "negative",
      sellIn: {
        currentQuarter: {
          name: number,
          percent: number,
        },
        ytd: number,
        ytd_previous_month: number,
        difference: "positive" | "neutral" | "negative",
      }
    },
  ] */

  return await axios.get('/brands', {
    params: {
      page: page,
      page_size: 10,
      q: q,
    }
  });
};

export const getBrandDetails = async (brandId: string):Promise<BrandDetailsResponse[]> => {
  /* {
    brickName: string;
    month: number (float);
    rollingQ: number (float);
    ytd: number (float);
  }[] */
  
  return await axios.get(`/brands/${brandId}`);
};
