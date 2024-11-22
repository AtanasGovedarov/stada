import { useState } from "react";
import { Link } from "react-router-dom";

import {
  Box,
  Drawer,
  IconButton
} from "@mui/material";

import { Menu } from "@mui/icons-material";

export const MainNavigation = () => {
  const [ open, setOpen ] = useState(false);
  return (
    <>
      <IconButton
        onClick={() => setOpen(true)}
      >
        <Menu fontSize={"large"} />
      </IconButton>
      <Drawer
        anchor={'right'}
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box
          sx={{
            width: '250px',
          }}
        >
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/brands">Brands</Link>
              </li>
              <li>
                <Link to="/nothing-here">Nothing Here</Link>
              </li>
            </ul>
          </nav>
        </Box>
      </Drawer>
    </>
  );
};
