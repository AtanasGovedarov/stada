import { Card, Grid2, styled } from "@mui/material";
import { Link } from "react-router-dom";

const StyledCard = styled(Card)(({ theme }) => `
  border-radius: 12px;
  background: var(--Gradient, linear-gradient(180deg, #005FAE 0%, #003460 100%));
`);

export const MainCTA = () => {
  return (
  <Grid2 container columns={2}>
    <Grid2 size={1}>
      <Link to={'/brands'}>
        <StyledCard>
          Brands
        </StyledCard>
      </Link>
    </Grid2>
    <Grid2 size={1}>
      <Link to={'/pharmacies'}>PHARMACIES</Link>
    </Grid2>
  </Grid2>);
};
