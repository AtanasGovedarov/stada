import { FC } from "react";

import { Box, Typography, useTheme } from "@mui/material";
import { ArrowBackIosNew } from "@mui/icons-material";
import { Link } from "react-router-dom";

type PageTitleProps = {
  label: string;
  to: string;
  pharmacy?: boolean;
}

export const PageTitle:FC<PageTitleProps> = ({
  label,
  to,
  pharmacy,
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
          display: !!pharmacy ? 'block' : 'flex',
          alignItems: 'center'
        }}
      >
        <ArrowBackIosNew
          fontSize={'large'}
          sx={{
            color: theme.colors.stada.stadaBlue,
          }}
        />
        <Typography
          variant={'body2'}
          sx={{
            flexGrow: 1,
            textAlign: !!pharmacy ? 'left' : 'center',
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
