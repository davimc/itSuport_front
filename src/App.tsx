
import Header from './components/Header'

import NewJob from './components/forms/NewJobs/index.tsx'
import './App.css'
import { Paper } from '@mui/material'

function App() {

  return (
    <div className='app'>
      <Header />
      <div className="app-container">
        <Paper elevation={3} className='app-content'>
          <NewJob />
        </Paper>
      </div>
    </div>
  )
}

export default App
