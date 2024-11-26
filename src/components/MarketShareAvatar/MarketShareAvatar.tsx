import { Avatar, Typography, useTheme } from "@mui/material";
import { FC } from "react";

type MarketShareAvatarProps = {
  percent: number
};

export const MarketShareAvatar:FC<MarketShareAvatarProps> = ({
  percent
}) => {
  const theme = useTheme();

  const avatarBgColor = percent < 11 ?
    theme.colors.stada.stadaRedError : percent < 31 ?
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
