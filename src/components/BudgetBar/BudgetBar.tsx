import { FC } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { IncreaseDecrease } from "../../types/pharmacy/pharmacy.types";

type BudgetBarProps = {
  value: number,
  type?: IncreaseDecrease,
  total?: boolean,
};

export const BudgetBar:FC<BudgetBarProps> = ({
  value,
  total,
  type,
}) => {
  const theme = useTheme();

  const isBlue = value < 10000;
  const barBackground = ():string => {
    return !!total ? '#5F84A6' : (isBlue ? theme.colors.stada.stadaBlue : (type === 'Increase' ? theme.colors.stada.stadaGreenSuccess : theme.colors.stada.stadaRedError));
  };

  const barWidth = ():string => {
    return !!total ? '50%': (type === 'Increase' ? '100%' : '30%');
  };

  const barContent = ():string => {
    return (!!total? '' : !!type ? (type === 'Increase' ? ' + ' : ' - ')  : '' ) + value + ' EUR';
  };

  return (
    <Box
      sx={{
        marginBottom: '4px'
      }}
    >
      <Typography
        variant={'body2'}
        sx={{
          backgroundColor: barBackground(),
          width: barWidth(),
          color: 'white',
          fontSize: '12px',
          textAlign: 'right',
          paddingRight: '4px'
        }}
      >
        {barContent()}
      </Typography>
    </Box>
  );
};
