import { Link, Outlet } from "react-router-dom";

import { Box, IconButton } from "@mui/material";

import { styled } from "@mui/material/styles";

import { MainNavigation } from "../components/Menu/MainNavigation";
import logo from "./../stada_logo.png";
import aibg from "./../aibg.jpeg";
import { SearchBox } from "../components/SearchBox/SearchBox";

const StadAiButton = styled(IconButton)(({theme}) => ({
  background: ` url(${aibg}) no-repeat 0 0`,
  backgroundPosition: 'center',
  padding: '0 12px!important',
  paddingBlockStart: '0!important',
  paddingBlockEnd: '0!important',
  borderRadius: '94px!important',
  color: 'white',
  fontSize: '1rem',
  fontWeight: 'bold',
  lineHeight: 1,
  width: 'auto',
  display: 'inline',
  height: '40px'
}));

export const MainLayout = () => {

  return (
    <Box>
      <Box
        sx={{
          padding: '12px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Link to={'/'} title="Stada">
          <img src={logo} />
        </Link>

        <StadAiButton
          size={"small"}
        >
          StadAI
        </StadAiButton>

        <MainNavigation />
      </Box>
      <SearchBox />
      <Outlet />
    </Box>
  );
};

export const Layout = () => {
  return (
    <Box>
      <Outlet />
    </Box>
  );
};
