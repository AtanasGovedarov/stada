import { FC, forwardRef } from "react";

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

import { BrandDetailsData } from "../../types/brand/brands.types";
import { Close } from "@mui/icons-material";
import { TransitionProps } from "@mui/material/transitions";

type BrandDetailsDialogProps = {
  open: boolean,
  detailsData: BrandDetailsData[],
  name: string,
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
  detailsData,
  name,
  onClose,
}) => {
  const handleClose = () => {
    onClose();
  };
  
  return (
  <Dialog
    fullScreen
    open={open}
    TransitionComponent={Transition}
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
        {name}
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
      {detailsData.map((item, ind) => {
        return (
          <Grid2
            container
            columns={1}
            key={item.venue + ind}
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
                {item.venue}
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
