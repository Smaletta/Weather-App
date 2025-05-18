import './App.css'
import SearchAppBar from './components/AppBar/AppBar.jsx'
import DataTable from './components/DataTable/DataTable.jsx'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function App() {

  return (
    <>
      <SearchAppBar />
      <Box sx={{ width: '75%', maxWidth: 600, margin: 'auto', textAlign: 'center' }}>
        <Typography component="h1" variant="h1" gutterBottom>
          Weather App
        </Typography>
        <DataTable />
      </Box>
    </>
  )
}

export default App
