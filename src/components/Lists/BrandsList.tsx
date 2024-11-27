import { FC, useState } from "react";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from "@mui/material";

import { BrandData } from "../../types/brand/brands.types";
import { ExpandMore } from "@mui/icons-material";
import { MarketShareAvatar } from "../MarketShareAvatar/MarketShareAvatar";
import { TrendIcon } from "../TrendIcon/TrendIcon";
import { BrandDetailsDialog } from "../Dialogs/BrandDetailsDialog";
import { PrimaryButton } from "../Buttons/PrimaryButton";

type BrandsListProps = {
  data: BrandData[];
};

export const BrandsList:FC<BrandsListProps> = ({
  data
}) => {
  const theme = useTheme();
  const [ brandDetailsDialog, setBrandDetailsDialog ] = useState(false);

  return (
    <Box
      sx={{
        padding: '24px'
      }}
    >
      {data.map((brand, i) => {
        return (
          <Accordion
            key={brand.id + i}
            sx={{
              padding: '8px',
              borderRadius: '8px',
              marginBottom: '8px',
              [`&.Mui-expanded`]: {
                marginBottom: '8px',
                border: `1px solid ${theme.colors.stada.stadaBlue}`,
                [`& .MuiAccordionSummary-expandIconWrapper svg`]: {
                  fill: theme.colors.stada.stadaBlue,
                },
              },
              [`& .MuiAccordionSummary-content`]: {
                margin: 0,
                alignItems: 'center',
              }
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMore fontSize={'large'} sx={{
                color: '#8F9499'
              }} />}
              sx={{
                padding: 0,
                borderRadius: 0,
                display: 'flex',
              }}
            >
              <MarketShareAvatar
                percent={brand.marketSharePercent}
              />
              <Typography
                variant={'body2'}
                sx={{
                  fontSize: '14px',
                  flexGrow: 1,
                  paddingLeft: '16px'
                }}
              >
                {brand.name}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                padding: 0
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  marginTop: '6px',
                  alignItems: 'center',
                  borderTop: `1px solid ${theme.colors.alpha.black[30]}`,
                }}
              >
                <TableContainer
                  sx={{
                    flexGrow: 1,
                  }}
                >
                  <Table>
                    <TableHead>
                      <TableRow
                        sx={{
                          backgroundColor: 'transparent'
                        }}
                      >
                        <TableCell
                          sx={{
                            borderBottom: 'none'
                          }}
                        >
                          <Typography
                            variant={'body1'}
                            sx={{
                              textTransform: 'none'
                            }}
                          >
                            Продажби
                          </Typography>
                        </TableCell>
                        <TableCell
                          sx={{
                            borderBottom: 'none'
                          }}
                        >
                          <Typography
                            variant={'body1'}
                            sx={{
                              textTransform: 'none'
                            }}
                          >
                            Q2
                          </Typography>
                        </TableCell>
                        <TableCell
                          sx={{
                            borderBottom: 'none'
                          }}
                        >
                          <Typography
                            variant={'body1'}
                            sx={{
                              textTransform: 'none'
                            }}
                          >
                            YtD
                          </Typography>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          <Typography
                            variant={'body2'}
                            sx={{
                              display: 'inline'
                            }}
                          >
                            Sell in
                          </Typography>
                          <Typography
                            sx={{
                              display: 'inline'
                            }}
                          > vs </Typography>
                          <Typography
                            variant={'body2'}
                            sx={{
                              display: 'inline'
                            }}
                          >PY</Typography>
                        </TableCell>
                        <TableCell>
                          {brand.sellInVsPyPercent.q2}%
                        </TableCell>
                        <TableCell>
                          {brand.sellInVsPyPercent.ytd}%
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
                <TrendIcon trend={brand.trend} />
              </Box>
              <PrimaryButton
                label={'Виж продажби'}
                onClick={() => setBrandDetailsDialog(true)}
              />
              <BrandDetailsDialog
                open={brandDetailsDialog}
                name={brand.name}
                detailsData={brand.details}
                onClose={() => setBrandDetailsDialog(false)}
              />
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
};
