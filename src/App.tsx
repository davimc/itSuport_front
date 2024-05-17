
import Header from './components/Header'

import NewJob from './components/forms/NewJobs/index.tsx'
import './App.css'
import { Paper } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'


function App() {

  return (
    <div className='app'>
      <Header />
      <div className="app-container">
        <Paper elevation={3} className='app-content'>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <NewJob />
          </LocalizationProvider>
        </Paper>
      </div>
    </div>
  )
}

export default App
