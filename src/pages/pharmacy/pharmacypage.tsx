import { useParams } from "react-router-dom";

import { Box, Typography } from "@mui/material";

import { PageTitle } from "../../components/PageTitle/PageTitle";
import { PharmacyProfile } from "../../types/pharmacy/pharmacy.types";
import { ProductsList } from "../../components/Lists/ProductsList";

const PHARMACIES:PharmacyProfile[] = [
  {
    id: 'pharmacyid1',
    name: 'Софармаси',
    address: 'София, ул. Димитър Хаджикоцев 6',
    products: [
      {
        name: 'Мукосолван',
        id: 'productd1',
        change: 10000,
        type: 'Decrease',
        total: 25000,
      },
      {
        name: 'Простенал',
        id: 'productid2',
        change: 10000,
        type: 'Increase',
        total: 25000,
      },
    ],
  }
];

const PharmacyPage = () => {
  const { pharmacyid } = useParams();

  const pharmacyData = PHARMACIES.find((pharmacy) => pharmacy.id === pharmacyid);

  return (
    <Box>
      <PageTitle
        label={!!pharmacyData ? pharmacyData.name : 'Аптека'}
        to={'/pharmacies'}
      />
      {!!pharmacyData &&
      <>
        <Typography
          sx={{
            paddingX: '24px'
          }}
        >
          {pharmacyData.address}
        </Typography>
        <ProductsList
          data={pharmacyData.products}
        />
      </>
      }
    </Box>
  );
};

export default PharmacyPage;
