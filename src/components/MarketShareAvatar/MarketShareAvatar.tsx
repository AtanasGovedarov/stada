import { Avatar, Typography, useTheme } from "@mui/material";
import { FC } from "react";
import { BrandDifference } from "../../types/brand/brands.types";

type MarketShareAvatarProps = {
  percent: number,
  difference: BrandDifference,
};

export const MarketShareAvatar:FC<MarketShareAvatarProps> = ({
  percent,
  difference,
}) => {
  const theme = useTheme();

  const avatarBgColor = difference === 'negative' ?
    theme.colors.stada.stadaRedError : difference === 'neutral' ?
      theme.colors.stada.stadaYellowWarning : theme.colors.stada.stadaGreenSuccess ;
  return (
    <Avatar
      sx={{
        backgroundColor: avatarBgColor,
        padding: '0px 4px 4px 4px',
        borderRadius: '5px',
        display: 'flex',
        flexDirection: 'column',
        width: '60px',
        height: '60px',
        textAlign: 'center',
      }}
    >
      <Typography
        sx={{
          display: 'block',
          textAlign: 'center',
          fontSize: '17px',
          fontWeight: 'bold',
        }}
      >
        {percent}%
      </Typography>
      <Typography
        sx={{
          display: 'block',
          textAlign: 'center',
          fontSize: '12px',
          lineHeight: '12px'
        }}
      >Market Share</Typography>
    </Avatar>
  );
};
