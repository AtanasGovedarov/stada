import { useEffect, useState } from "react";

import { Box } from "@mui/material";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import { SearchBox } from "../../components/SearchBox/SearchBox";
import { BrandData, BrandsListResponse } from "../../types/brand/brands.types";
import { BrandsList } from "../../components/Lists/BrandsList";
import { getBrands } from "../../api-calls/brands.api";

const DATA:BrandData[] = [
  {
    id: 'somebrandid',
    name: 'Простенал',
    marketSharePercent: 21,
    sellInVsPyPercent: {
      q2: 89,
      ytd: 105.2
    },
    details: [
      {
        venue: 'Test Venue',
        month: 34,
        rollingQ: 48,
        ytd: 89,
      },
      {
        venue: 'Another Venue',
        month: 42,
        rollingQ: 58,
        ytd: 92,
      },
    ],
    trend: false,
  },
  {
    id: 'someotherbrandid',
    name: 'Мукосолван',
    marketSharePercent: 32,
    sellInVsPyPercent: {
      q2: 79,
      ytd: 98.2
    },
    details: [
      {
        venue: 'Some Venue',
        month: 24,
        rollingQ: 46,
        ytd: 88,
      },
      {
        venue: 'Fourth Venue',
        month: 12,
        rollingQ: 76,
        ytd: 49,
      },
    ],
    trend: true,
  },
];

const BrandsPage = () => {
  const [ loading, setLoading ] = useState(false);
  const [ pageNumber, setPageNumber ] = useState(1);
  const [ brandsData, setBrandsData ] = useState<BrandsListResponse[] | null>(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const brandsResponse = await getBrands(pageNumber, null);
      setBrandsData(brandsResponse);
      setLoading(false);
    })();
  }, []);

  const toggleSearch = async (v: string ) => {
    setLoading(true);
    const brandsResponse = await getBrands(pageNumber, v);
    setBrandsData(brandsResponse);
    setLoading(false);
  };

  return (
    <Box>
      <PageTitle
        label={'Брандове'}
        to={'/home'}
      />
      <SearchBox
        placeholder={'Търси бранд'}
        onInput={(v: string) => toggleSearch(v)}
      />
      <BrandsList
        data={brandsData}
      />
    </Box>
  );
};

export default BrandsPage;
