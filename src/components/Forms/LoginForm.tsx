import { FC, useState, MouseEvent } from "react";
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useNavigate } from "react-router-dom";
import {
  Box,
  FormHelperText,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
  useTheme
} from "@mui/material";
import { PrimaryButton } from "../Buttons/PrimaryButton";

import logo from "./../../stada_logo.png";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { LoginParams } from "../../types/user/login.types";
import { userLoginSchema } from "../../schemas/UserSchema";

export const LoginForm:FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const [ showPassword, setShowPassword ] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<LoginParams>({
    resolver: yupResolver<LoginParams>(userLoginSchema),
    mode: 'onSubmit',
    defaultValues: {
      username: '',
      password: '',
    }
  });

  const onSubmit: SubmitHandler<LoginParams> = data => {
    const AVAILABLE_USERNAMES = ['dimitar.dimitrov@stada.com', 'viktoriya.valkanova@stada.com'];
    const AVAILABLE_PASSWORD = 'qwerty';

    if (AVAILABLE_USERNAMES.indexOf(data.username) < 0) {
      setError('root', {type: 'custom', message: 'Wrong username'});
    }

    if (data.password !== AVAILABLE_PASSWORD) {
      setError('root', {type: 'custom', message: 'Wrong password'});
    }
 
    if (data.password === AVAILABLE_PASSWORD && AVAILABLE_USERNAMES.indexOf(data.username) > -1) {
      navigate('/home');
    }
  };

  return (
    <Box
      component={'form'}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%'
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <img alt={'Stada'} src={logo} style={{
        margin: '0 0 24px 0'
      }} />

      <TextField
        size="small"
        {...register('username')}
        sx={{
          width: '100%',
          marginBottom: '12px',
          [`& .MuiInputBase-root.MuiOutlinedInput-root`]: {
            borderRadius: '4px',
          }
        }}
      />

      <OutlinedInput
        size="small"
        type={showPassword ? 'text' : 'password'}
        {...register('password')}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label={
                showPassword ? 'hide the password' : 'display the password'
              }
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              onMouseUp={handleMouseUpPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        sx={{
          width: '100%',
          marginBottom: '12px',
          borderRadius: '4px',
        }}
      />

      <PrimaryButton
        label={'Login'}
        type={'submit'}
      />

      {errors && errors.root &&
        <FormHelperText
          sx={{
            color: theme.colors.stada.magenta,
          }}
        >
          {errors.root.message}
        </FormHelperText>
      }
    </Box>
  );
};
