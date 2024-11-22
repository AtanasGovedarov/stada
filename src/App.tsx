import ThemeProvider from './theme/ThemeProvider';
import MainRoutes from './routes/main.routes';
import { useRoutes } from "react-router-dom";
import { CssBaseline } from '@mui/material';

import './App.css';

export default function App() {
  const element = useRoutes(MainRoutes);

  return (
    <ThemeProvider>
      <CssBaseline>
        {element}
      </CssBaseline>
    </ThemeProvider>
  );
}
