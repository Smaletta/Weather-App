import './App.css'
import SearchAppBar from './components/AppBar/AppBar.jsx'
import DataTable from './components/DataTable/DataTable.jsx'
import Container from '@mui/material/Container';

function App() {

  return (
    <>
      <SearchAppBar />
      <Container sx={{ margin: 'auto', textAlign: 'center' }}>
        <DataTable />
      </Container>
    </>
  )
}

export default App
