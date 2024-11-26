import { Button, styled, useTheme } from "@mui/material";
import { FC } from "react";

type PrimaryButtonProps = {
  label: string,
  onClick: () => void,
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
}) => {
  const theme = useTheme();

  return (
    <StyledButton
      onClick={() => onClick()}
    >
      {label}
    </StyledButton>
  );
};
