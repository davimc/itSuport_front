import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import './styles.css'
import ListJobs from '../forms/Jobs/ListJobs'
import FormJob from '../forms/Jobs/FormJobs'
import ListClient from '../forms/Client/ListClient'
import FormClient from '../forms/Client/FormClient'
import NavRouter from '../routers/NavRouter'
import { Paper } from '@mui/material'
import Welcome from '../forms/Welcome'

function RoutesViewer() {
    return (
        <Router>
                <NavRouter open={false} toggleDrawer={() => { }} />

            <Paper elevation={3} className='app-content'>
            <div className="routes-viewer">

                    <Routes>
                        {/* Jobs */}
                        <Route path='/' element={<Welcome/>} />
                        
                        <Route path='/jobs' element={<ListJobs />} />
                        <Route path='/jobs' element={<FormJob />} />
                        {/* Clients */}
                        <Route path='/clients' element={<ListClient />} />
                        <Route path='/clients/new' element={<FormClient />} />
                        {/*

                    //<Route path='/licenses' element={<LicenseCard/>}/>
                    <Route path='/exchanges' element={<ExchangeCard/>}/>*/}

                    </Routes>
            </div>

            <div className="routes-nav">
                {/* todo Nav*/}
            </div>
        </Paper>
        </Router >

    )
}
export default RoutesViewer