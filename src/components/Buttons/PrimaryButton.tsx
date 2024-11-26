import { Button, styled } from "@mui/material";
import { FC } from "react";

type PrimaryButtonProps = {
  label: string,
  onClick: () => void,
  sx?: any, 
};

const StyledButton = styled(Button)(({theme}) => `
&.MuiButton-text {
  display: block;
  border-radius: 4px;
  text-align: center;
  color: white;
  font-size: 14px;
  width: 100%;
  background-color: ${theme.colors.stada.magenta};
}
`);

export const PrimaryButton:FC<PrimaryButtonProps> = ({
  onClick,
  label,
  sx,
}) => {
  return (
    <StyledButton
      onClick={() => onClick()}
      sx={{...sx}}
    >
      {label}
    </StyledButton>
  );
};
