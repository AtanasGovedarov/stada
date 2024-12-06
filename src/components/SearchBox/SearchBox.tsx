import { FC, useEffect, useState } from "react";

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
  placeholder?: string,
  onInput: (v: string) => void,
};

export const SearchBox:FC<SearchBoxProps> = ({
  filters,
  selected,
  placeholder,
  onInput,
}) => {
  const [ searchStr, setSearchStr ] = useState<string | null>(null);

  useEffect(() => {
    if (!searchStr) return;

    onInput(searchStr);
  }, [searchStr])

  return (
    <Box
      sx={{
        display: 'flex',
        padding: '24px'
      }}
    >
      <OutlinedInput
        placeholder={!!placeholder ? placeholder : 'Търси'}
        value={searchStr}
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
