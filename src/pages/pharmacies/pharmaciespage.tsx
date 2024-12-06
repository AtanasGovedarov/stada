import { useEffect, useState } from "react";

import { Box } from "@mui/material";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import { SearchBox } from "../../components/SearchBox/SearchBox";
import { PharmaciesListResponse, PharmacyData } from "../../types/pharmacy/pharmacy.types";
import { PharmaciesList } from "../../components/Lists/PharmaciesList";
import { getClients } from "../../api-calls/clients.api";

const DATA:PharmacyData[] = [
  {
    name: 'Софармаси',
    id: 'pharmacyid1',
    address: 'ул. Примерна но. 99',
    change: 10000,
    type: 'Decrease',
    total: 25000,
  },
  {
    name: 'Софармаси 2',
    id: 'pharmacyid2',
    change: 10000,
    type: 'Increase',
    total: 25000,
  },
];

const PharmaciesPage = () => {
  const selected = ['А-Г', 'Положителен'];
  const [ loading, setLoading ] = useState(false);
  const [ pageNumber, setPageNumber ] = useState<number>(1);
  const [ clientsData, setClientsData ] = useState<PharmaciesListResponse[] | null>(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const pharmaciesResponse = await getClients(pageNumber, 8);
      setClientsData(pharmaciesResponse);
      setLoading(false);
    })();
  }, []);

  return (
    <Box>
      <PageTitle
        label={'Аптеки'}
        to={'/home'}
      />
      <SearchBox
        filters
        selected={selected}
        onInput={(v: string) => {}}
      />
      <PharmaciesList
        data={clientsData}
      />
    </Box>
  );
};
export default PharmaciesPage;
