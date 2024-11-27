import { FC } from "react";

import { Box, FormGroup, InputAdornment, OutlinedInput, SwipeableDrawer, Typography } from "@mui/material";
import { PrimaryButton } from "../Buttons/PrimaryButton";

type AiDialogProps = {
  open: boolean,
  onOpen: () => void,
  onClose: () => void,
};

export const AiDialog:FC<AiDialogProps> = ({
  open,
  onOpen,
  onClose,
}) => {
  return (
    <SwipeableDrawer
      anchor={'bottom'}
      open={open}
      onOpen={() => onOpen()}
      onClose={() => onClose()}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        [`& .MuiPaper-root`]: {
          borderRadius: '24px 24px 0 0',
          backgroundColor: '#070E19',
          height: '80%',
        }
      }}
    >
      <Box
        sx={{
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}
      >
        <Typography
          variant={'body2'}
          textAlign={'center'}
          fontSize={'48px'}
          sx={{
            color: 'white',
          }}
        >
          StadAI
        </Typography>
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
          }}
        >
          <Box>
            <FormGroup>
              <OutlinedInput
                placeholder={'Enter a prompt here ...'}
                endAdornment={<InputAdornment position="end" onClick={() => console.log('Start microphone')}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25" height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                  >
                    <path
                      d="M12.5 18.75C14.0913 18.75 15.6174 18.1179 16.7426 16.9926C17.8679 15.8674 18.5 14.3413 18.5 12.75V11.25M12.5 18.75C10.9087 18.75 9.38258 18.1179 8.25736 16.9926C7.13214 15.8674 6.5 14.3413 6.5 12.75V11.25M12.5 18.75V22.5M8.75 22.5H16.25M12.5 15.75C11.7044 15.75 10.9413 15.4339 10.3787 14.8713C9.81607 14.3087 9.5 13.5456 9.5 12.75V4.5C9.5 3.70435 9.81607 2.94129 10.3787 2.37868C10.9413 1.81607 11.7044 1.5 12.5 1.5C13.2956 1.5 14.0587 1.81607 14.6213 2.37868C15.1839 2.94129 15.5 3.70435 15.5 4.5V12.75C15.5 13.5456 15.1839 14.3087 14.6213 14.8713C14.0587 15.4339 13.2956 15.75 12.5 15.75Z"
                      stroke="#6971A3"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </InputAdornment>}
                sx={{
                  border: '1px solid #385178'
                }}
              />
              <PrimaryButton
                label={'Start'}
                onClick={() => {console.log('AI start')}}
                sx={{
                  marginTop: '16px',
                  fontSize: '16px',
                  backgroundColor: '#343C6A!important',
                  borderRadius: '16px!important'
                }}
              />
            </FormGroup>
          </Box>
          <PrimaryButton
            label={'Close session'}
            onClick={onClose}
            sx={{
              backgroundColor: 'transparent!important',
              fontSize: '14px',
              color: '#46508B!important',
            }}
          />
        </Box>
      </Box>
    </SwipeableDrawer>
  );
};
