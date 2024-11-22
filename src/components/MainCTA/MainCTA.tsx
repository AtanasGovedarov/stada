import { Card, Grid2, styled } from "@mui/material";
import { Link } from "react-router-dom";

const StyledCard = styled(Card)({
  
});

export const MainCTA = () => {
  return (
  <Grid2 container columns={2}>
    <Grid2 size={1}>
      <Link to={'/brands'}>BRANDS</Link>
    </Grid2>
    <Grid2 size={1}>
      <Link to={'/pharmacies'}>PHARMACIES</Link>
    </Grid2>
  </Grid2>);
};
