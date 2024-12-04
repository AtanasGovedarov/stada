import { Button, styled } from "@mui/material";
import { FC } from "react";

type PrimaryButtonProps = {
  label: string,
  type?: "button" | "submit" | "reset" | undefined,
  onClick?: () => void,
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
  type = 'button',
  sx,
}) => {
  return (
    <StyledButton
      type={type}
      sx={{...sx}}
    >
      {label}
    </StyledButton>
  );
};
