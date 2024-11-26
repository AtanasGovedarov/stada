import { FC } from "react";

import {
  Box,
  Card,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import { PharmacyData } from "../../types/pharmacy/pharmacy.types";
import { Link } from "react-router-dom";
import { BudgetBar } from "../BudgetBar/BudgetBar";

type PharmaciesListProps = {
  data: PharmacyData[],
};

const StyledCard = styled(Card)(({theme})=> `
  background-color: white;
  border-radius: 12px;
  padding: 8px 12px 12px 12px;
  box-shadow: none;
`);

export const PharmaciesList:FC<PharmaciesListProps> = ({
  data,
}) => {
  const theme = useTheme();

  const iconColor = (item: PharmacyData):string => {
    return item.type === 'Increase' ? theme.colors.stada.stadaGreenSuccess : theme.colors.stada.stadaRedError;
  };

  return (
    <Box
      sx={{
        padding: '24px'
      }}
    >
      {data.map((pharmacy, i) => {
        return (
          <Link
            key={pharmacy.id + i}
            to={`/pharmacy/${pharmacy.id}`}
            style={{
              textDecoration: 'none',
              marginBottom: '8px',
              display: 'block'
            }}
          >
          <StyledCard>
            <Box
              sx={{
                display: 'flex',
                [`& #icon path`]: {
                  transformBox: 'fill-box',
                  transformOrigin: 'center',
                  transform: `rotate(45deg)`,
                }
              }}
            >
              <Typography
                variant={'body2'}
                fontSize={'14px'}
                sx={{
                  flexGrow: 1
                }}
              >
                {pharmacy.name}
              </Typography>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                id="icon"
              >
                <path
                  d="M15 11.25L12 8.25M12 8.25L9 11.25M12 8.25L12 15.75M3 12C3 10.8181 3.23279 9.64778 3.68508 8.55585C4.13737 7.46392 4.80031 6.47177 5.63604 5.63604C6.47177 4.80031 7.46392 4.13738 8.55585 3.68508C9.64778 3.23279 10.8181 3 12 3C13.1819 3 14.3522 3.23279 15.4441 3.68508C16.5361 4.13738 17.5282 4.80031 18.364 5.63604C19.1997 6.47177 19.8626 7.46392 20.3149 8.55585C20.7672 9.64778 21 10.8181 21 12C21 14.3869 20.0518 16.6761 18.364 18.364C16.6761 20.0518 14.3869 21 12 21C9.61305 21 7.32387 20.0518 5.63604 18.364C3.94821 16.6761 3 14.3869 3 12Z"
                  stroke={iconColor(pharmacy)}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Box>

            <Typography
              sx={{
                fontSize: '12px',
                lineHeight: '20px',
                minHeight: '20px',
                marginBottom: '2px',
              }}
            >
              {!!pharmacy.address && pharmacy.address}
            </Typography>

            <Box>
              <BudgetBar value={pharmacy.change} type={pharmacy.type} />
              <BudgetBar total value={pharmacy.total} />
            </Box>
          </StyledCard>
          </Link>
        );
      })}
    </Box>
  );
};
