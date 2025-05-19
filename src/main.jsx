import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { WeatherDataProvider } from './context/WeatherData';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme} defaultMode='dark'>
      <WeatherDataProvider>
        <CssBaseline />
        <App />
      </WeatherDataProvider>
    </ThemeProvider>
  </StrictMode>
)
