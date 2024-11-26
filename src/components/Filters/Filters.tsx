import { FC, forwardRef, useState } from "react";

import {
  Box,
  Card,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid2,
  IconButton,
  Slide,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { Close } from "@mui/icons-material";
import { PrimaryButton } from "../Buttons/PrimaryButton";

type FiltersProps = {
  selected?: string[],
};

const StyledCard = styled(Card)(({ theme }) => `
  border-radius: 8px;
  background-color: #5F84A6;
  color: white;
  padding: 12px 24px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: space-evenly;

  &.active {
    background-color: ${theme.colors.stada.stadaBlue};
  }
`);

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const Filters:FC<FiltersProps> = ({
  selected,
}) => {
  const theme = useTheme();
  const [ open, setOpen ] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const isSelected = (arg: string):string => {
    const is = !!selected && selected.indexOf(arg) > -1;
    return is ? 'active' : '';
  }

  return (
    <>
      <IconButton
        onClick={() => setOpen(true)}
      >
        <svg xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="17"
          viewBox="0 0 18 17"
          fill="none"
        >
          <path d="M8.99997 0.921054C11.32 0.921054 13.5937 1.11642 15.8067 1.492C16.2555 1.56779 16.5789 1.96021 16.5789 2.41495V3.29411C16.5789 3.54293 16.5299 3.78931 16.4347 4.01919C16.3395 4.24908 16.1999 4.45795 16.024 4.63389L11.4497 9.20821C11.2737 9.38415 11.1341 9.59303 11.0389 9.82291C10.9437 10.0528 10.8947 10.2992 10.8947 10.548V13.0128C10.8948 13.3648 10.7968 13.7098 10.6118 14.0093C10.4267 14.3087 10.162 14.5506 9.84712 14.708L7.10523 16.0789V10.548C7.10523 10.2992 7.05623 10.0528 6.96101 9.82291C6.86579 9.59303 6.72622 9.38415 6.55028 9.20821L1.97597 4.63389C1.80003 4.45795 1.66046 4.24908 1.56524 4.01919C1.47003 3.78931 1.42102 3.54293 1.42102 3.29411V2.41495C1.42102 1.96021 1.74439 1.56779 2.19323 1.492C4.44213 1.11125 6.71906 0.920257 8.99997 0.921054Z" stroke="#343C6A" strokeWidth="1.26316" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </IconButton>
      <Dialog
        fullScreen
        open={open}
        TransitionComponent={Transition}
        onClose={handleClose}
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
            Филтри
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
          <Typography
            variant={'body2'}
          >
            Филтрирай по име
          </Typography>
          <Grid2 container columns={3} spacing={2} marginTop={'12px'}>
            <Grid2 size={1}>
              <StyledCard
                onClick={() => {console.log('А-Г');}}
                className={isSelected('А-Г')}
              >
                <Typography
                  variant={'body2'}
                  sx={{
                    color: 'white'
                  }}
                >
                  А-Г
                </Typography>
              </StyledCard>
            </Grid2>
            <Grid2 size={1}>
              <StyledCard
                onClick={() => {console.log('Д-З');}}
                className={isSelected('Д-З')}
              >
                <Typography
                  variant={'body2'}
                  sx={{
                    color: 'white'
                  }}
                >
                  Д-З
                </Typography>
              </StyledCard>
            </Grid2>
            <Grid2 size={1}>
              <StyledCard
                onClick={() => {console.log('И-Л');}}
                className={isSelected('И-Л')}
              >
                <Typography
                  variant={'body2'}
                  sx={{
                    color: 'white'
                  }}
                >
                  И-Л
                </Typography>
              </StyledCard>
            </Grid2>

            <Grid2 size={1}>
              <StyledCard
                onClick={() => {console.log('М-П');}}
                className={isSelected('М-П')}
              >
                <Typography
                  variant={'body2'}
                  sx={{
                    color: 'white'
                  }}
                >
                  М-П
                </Typography>
              </StyledCard>
            </Grid2>
            <Grid2 size={1}>
              <StyledCard
                onClick={() => {console.log('Р-У');}}
                className={isSelected('Р-У')}
              >
                <Typography
                  variant={'body2'}
                  sx={{
                    color: 'white'
                  }}
                >
                  Р-У
                </Typography>
              </StyledCard>
            </Grid2>
            <Grid2 size={1}>
              <StyledCard
                onClick={() => {console.log('Ф-Ч');}}
                className={isSelected('Ф-Ч')}
              >
                <Typography
                  variant={'body2'}
                  sx={{
                    color: 'white'
                  }}
                >
                  Ф-Ч
                </Typography>
              </StyledCard>
            </Grid2>

            <Grid2 size={3}>
              <StyledCard
                onClick={() => {console.log('Ш-Я');}}
                className={isSelected('Ш-Я')}
              >
                <Typography
                  variant={'body2'}
                  sx={{
                    color: 'white'
                  }}
                >
                  Ш-Я
                </Typography>
              </StyledCard>
            </Grid2>
          </Grid2>

          <Typography
            variant={'body2'}
            sx={{
              marginTop: '32px'
            }}
          >
            Филтрирай по изпълнение
          </Typography>
          <Box>
            <PrimaryButton
              label={'Положителен'}
              onClick={() => {console.log('Положителен')}}
              sx={{
                color: isSelected('Положителен') ? 'white': theme.colors.alpha.black[100] + '!important',
                border: `1px solid ${isSelected('Положителен') ? theme.colors.stada.stadaBlue: '#E6E6E6' }!important;`,
                backgroundColor: (isSelected('Положителен') ? theme.colors.stada.stadaBlue : 'white' )+ '!important',
                marginBottom: '12px',
                marginTop: '12px',
              }}
            />

            <PrimaryButton
              label={'Неутрален'}
              onClick={() => {console.log('Неутрален')}}
              sx={{
                color: isSelected('Неутрален') ? 'white': theme.colors.alpha.black[100] + '!important',
                border: `1px solid ${isSelected('Неутрален') ? theme.colors.stada.stadaBlue: '#E6E6E6' }!important;`,
                backgroundColor: (isSelected('Неутрален') ? theme.colors.stada.stadaBlue : 'white' )+ '!important',
                marginBottom: '12px',
              }}
            />

            <PrimaryButton
              label={'Отрицателен'}
              onClick={() => {console.log('Отрицателен')}}
              sx={{
                color: isSelected('Отрицателен') ? 'white': theme.colors.alpha.black[100] + '!important',
                border: `1px solid ${isSelected('Отрицателен') ? theme.colors.stada.stadaBlue: '#E6E6E6' }!important;`,
                backgroundColor: (isSelected('Отрицателен') ? theme.colors.stada.stadaBlue : 'white' )+ '!important',
                marginBottom: '24px',
              }}
            />
          </Box>
          <PrimaryButton
            label={'Приложи филтрите'}
            onClick={() => {console.log('Приложи филтрите')}}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};
