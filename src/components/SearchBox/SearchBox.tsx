import {
  Box,
  InputAdornment,
  OutlinedInput
} from "@mui/material";

import { Search } from "@mui/icons-material";

export const SearchBox = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        padding: '24px'
      }}
    >
      <OutlinedInput
        placeholder={'Търси'}
        startAdornment={
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        }
        sx={{
          flexGrow: 1
        }}
      />
    </Box>
  );
};
