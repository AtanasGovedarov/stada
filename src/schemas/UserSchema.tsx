import * as yup from "yup";

export const userLoginSchema = yup.object().shape({
  username: yup.string().email().required().label('Email address'),
  password: yup.string().required().label('Password'),
});
