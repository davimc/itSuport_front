
import Header from './components/Header'


import './App.css'

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import RoutesViewer from './components/routers/RoutesViewer/index.tsx';



function App() {

  return (
    <div className='app'>
      <Header />
      <div className="app-container">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <RoutesViewer />
          

        </LocalizationProvider>
      </div>
    </div >
  )
}

export default App
