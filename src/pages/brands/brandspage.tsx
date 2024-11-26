import { Box } from "@mui/material";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import { SearchBox } from "../../components/SearchBox/SearchBox";
import { BrandData } from "../../types/brand/brands.types";
import { BrandsList } from "../../components/Lists/BrandsList";

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
  return (
    <Box>
      <PageTitle
        label={'Брандове'}
        to={'/'}
      />
      <SearchBox />
      <BrandsList
        data={DATA}
      />
    </Box>
  );
};

export default BrandsPage;