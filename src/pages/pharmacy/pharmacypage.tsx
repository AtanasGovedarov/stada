import { useParams } from "react-router-dom";

import { Box, Typography } from "@mui/material";

import { PageTitle } from "../../components/PageTitle/PageTitle";
import { PharmaciesListResponse, PharmacyProfile } from "../../types/pharmacy/pharmacy.types";
import { ProductsList } from "../../components/Lists/ProductsList";
import { useEffect, useState } from "react";
import { getClients } from "../../api-calls/clients.api";

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
  const [ loading, setLoading ] = useState(false);
  const [ pharmacyData, setPharmacyData ] = useState<PharmaciesListResponse | null>(null);

  //const pharmacyData = PHARMACIES.find((pharmacy) => pharmacy.id === pharmacyid);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const pharmaciesResponse = await getClients(1, 8);
      setPharmacyData(pharmaciesResponse.filter((client) => client.name === pharmacyid)[0]);
      setLoading(false);
    })();
  }, []);

  return (
    <Box>
      <PageTitle
        pharmacy
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
          clientDetails={pharmacyData}
        />
      </>
      }
    </Box>
  );
};

export default PharmacyPage;
