import './App.css'
import AppBar from './components/AppBar/AppBar.jsx'
import DataTable from './components/DataTable/DataTable.jsx'

function App() {

  return (
    <>
      <AppBar />
      <h1 class="text-3xl font-bold underline p-2">Weather App</h1>
      <DataTable />
    </>
  )
}

export default App
