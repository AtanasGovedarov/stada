import { FC, forwardRef, useEffect, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  Grid2,
  IconButton,
  Slide,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from "@mui/material";

import { BrandDetailsData, BrandDetailsResponse } from "../../types/brand/brands.types";
import { Close } from "@mui/icons-material";
import { TransitionProps } from "@mui/material/transitions";
import { getBrandDetails } from "../../api-calls/brands.api";

type BrandDetailsDialogProps = {
  open: boolean,
  id: string,
  onClose: () => void,
};

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const BrandDetailsDialog:FC<BrandDetailsDialogProps> = ({
  open,
  id,
  onClose,
}) => {
  const [ loading, setLoading ] = useState(false);
  const [ brandDetails, setBrandDetails ] = useState<BrandDetailsResponse[] | null>(null);

  const handleClose = () => {
    onClose();
  };

  useEffect(() => {
    (async () => {
      setLoading(true);
      const brandResponse = await getBrandDetails(id);
      setBrandDetails(brandResponse);
      setLoading(false);
    })();
  }, []);
  
  return (
  <Dialog
    fullScreen
    open={open}
    TransitionComponent={Transition}
    closeAfterTransition={false}
    keepMounted
    sx={{
      height: '80%',
      top: 'auto',
      [`& .MuiDialog-container > .MuiDialog-paper`]: {
      borderTopLeftRadius: '24px',
      borderTopRightRadius: '24px',
      }
    }}
  >
    <DialogTitle
      sx={{
        padding: '0 24px',
      }}
    >
      <Typography
        variant={'body2'}
        sx={{
          color: '#343C6A',
          fontSize: '24px',
          padding: '24px 0'
        }}
      >
        {id}
      </Typography>
    </DialogTitle>
    <IconButton
      aria-label="close"
      onClick={handleClose}
      sx={(theme) => ({
        position: 'absolute',
        right: 8,
        top: 8,
        color: theme.palette.grey[500],
      })}
    >
      <Close />
    </IconButton>
    <DialogContent>
      {!!brandDetails && brandDetails.map((item, ind) => {
        return (
          <Grid2
            container
            columns={1}
            key={item.brickName + ind}
            sx={{
              borderBottom: `1px solid #E6E6E6`,
              marginBottom: '24px'
            }}
          >
            <Grid2 size={1}>
              <Typography
                variant={'body2'}
                sx={{
                  fontSize: '18px',
                  paddingBottom: '12px'
                }}
              >
                {item.brickName}
              </Typography>
              <TableContainer>
                <Table
                  size={'small'}
                  sx={{
                    maxWidth: '100%'
                  }}
                >
                  <TableHead>
                    <TableRow
                      sx={{
                        backgroundColor: 'transparent',
                        [`& .MuiTableCell-root`]: {
                          border: 'none',
                          textTransform: 'none'
                        }
                      }}
                    >
                      <TableCell>

                      </TableCell>
                      <TableCell>
                        <Typography>
                          Month
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography>
                          Rolling Q
                        </Typography>  
                      </TableCell>
                      <TableCell>
                        <Typography>
                          YtD
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                  <TableRow
                    sx={{
                      [`& .MuiTableCell-root`]: {
                        color: 'black',
                      }
                    }}
                  >
                      <TableCell
                        sx={{
                          minWidth: '90px'
                        }}
                      >
                        <Typography
                          variant={'body2'}
                        >
                          Sell In
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography
                          variant={'body2'}
                        >
                          {item.month}%
                        </Typography>
                      </TableCell>
                      <TableCell
                        sx={{
                          minWidth: '74px',
                        }}
                      >
                        <Typography
                          variant={'body2'}
                        >
                          {item.rollingQ}%
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography
                          variant={'body2'}
                        >
                          {item.ytd}%
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid2>
          </Grid2>
        );
      })
      }
    </DialogContent>
  </Dialog>
  );
};
