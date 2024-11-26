import { FC } from "react";

import {
  Box,
  InputAdornment,
  OutlinedInput
} from "@mui/material";

import { Search } from "@mui/icons-material";
import { Filters } from "../Filters/Filters";

type SearchBoxProps = {
  filters?: boolean,
  selected?: string[],
};

export const SearchBox:FC<SearchBoxProps> = ({
  filters,
  selected,
}) => {
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
          flexGrow: 1,
          marginRight: !!filters ? '12px' : 0,
        }}
      />
      {!!filters &&
        <Filters selected={!!selected ? selected : undefined} />
      }
    </Box>
  );
};
