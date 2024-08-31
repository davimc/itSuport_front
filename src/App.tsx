
import Header from './components/Header'


import './App.css'
import { Paper } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import RoutesViewer from './components/RoutesViewer/index.tsx';
import NavRouter from './components/routers/NavRouter/index.tsx';


function App() {

  return (
    <div className='app'>
      <Header />
      <div className="app-container">
          <NavRouter open={false} toggleDrawer={()=>{}} />
        <Paper elevation={3} className='app-content'>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <RoutesViewer />
          </LocalizationProvider>
        </Paper>
      </div>
    </div>
  )
}

export default App
