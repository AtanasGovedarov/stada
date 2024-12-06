import axios from "axios";
import { PharmaciesListResponse } from "../types/pharmacy/pharmacy.types";

export const getClients = async (page: number, page_size: number):Promise<PharmaciesListResponse[]> => {
  /* 
  return [
    {
      name: string,
      address: string,
      productPotentials: [
        {
          name: string,
          potential: number,
          turnover: number,
        }
      ],
      totalPotential: number,
      totalTurnover: number,
    },
  ]
  */

  return await axios.get('/clients', {
    params: {
      page: page,
      page_size: page_size,
    }
  });
};
