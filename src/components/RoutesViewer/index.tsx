import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import NewJob from '../forms/Jobs/NewJobs'
import './styles.css'
import ListJobs from '../forms/Jobs/ListJobs'

function RoutesViewer() {
    return (
        <Router>

            <div className="routes-viewer">

                <Routes>
                    <Route path='/' element={<ListJobs />} />
                    <Route path='/jobs' element={<NewJob />} />
                    {/*<Route path='/stores' element={<StoreCard/>}/>

                    //<Route path='/employees' element={<EmployeeCard/>}/>
                    //<Route path='/licenses' element={<LicenseCard/>}/>
    <Route path='/exchanges' element={<ExchangeCard/>}/>*/}

                </Routes>
            </div>

            <div className="routes-nav">
                {/* todo Nav*/}
            </div>
        </Router >

    )
}
export default RoutesViewer