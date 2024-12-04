
import { Box } from "@mui/material";
import { LoginForm } from "../../components/Forms/LoginForm";

const LoginPage = () => {
  return (
    <Box
      sx={{
        padding: '24px',
        display: 'flex',
        height: '100vh',
        alignItems: 'center'
      }}
    >
      <LoginForm />
    </Box>
  );
};

export default LoginPage;
