import { FC } from "react";

import { Box, Typography, useTheme } from "@mui/material";
import { ArrowBackIosNew } from "@mui/icons-material";
import { Link } from "react-router-dom";

type PageTitleProps = {
  label: string;
  to: string;
}

export const PageTitle:FC<PageTitleProps> = ({
  label,
  to,
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        margin: '24px'
      }}
    >
      <Link
        to={to}
        style={{
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <ArrowBackIosNew fontSize={'large'} sx={{color: theme.colors.stada.stadaBlue}} />
        <Typography
          sx={{
            flexGrow: 1,
            textAlign: 'center',
            fontSize: '24px',
            color: theme.colors.stada.stadaBlue
          }}
        >
          {label}
        </Typography>
      </Link>
    </Box>
  );
};
