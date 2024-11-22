import { ThemeProvider, createTheme } from '@mui/material';
import MainRoutes from './routes/main.routes';
import { useRoutes } from "react-router-dom";
import { stada } from './themes/stada';

export default function App() {
  const element = useRoutes(MainRoutes);
  const stadaTheme = createTheme(stada); 

  return (
    <ThemeProvider theme={stadaTheme}>
      {element}
    </ThemeProvider>
  );
}
