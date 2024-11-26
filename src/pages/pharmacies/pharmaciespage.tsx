import { Box } from "@mui/material";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import { SearchBox } from "../../components/SearchBox/SearchBox";
import { PharmacyData } from "../../types/pharmacy/pharmacy.types";
import { PharmaciesList } from "../../components/Lists/PharmaciesList";

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

  return (
    <Box>
      <PageTitle
        label={'Аптеки'}
        to={'/'}
      />
      <SearchBox filters selected={selected} />
      <PharmaciesList
        data={DATA}
      />
    </Box>
  );
};
export default PharmaciesPage;
