import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import NewJob from '../forms/NewJobs'
import RoutesNav from '../RoutesNav'
import './styles.css'

function RoutesViewer() {
    return (
        <Router>

            <div className="routes-viewer">

                <Routes>
                    <Route path='/' element={<NewJob />} />
                    <Route path='/jobs' element={<NewJob />} />
                    {/*<Route path='/stores' element={<StoreCard/>}/>

                    //<Route path='/employees' element={<EmployeeCard/>}/>
                    //<Route path='/licenses' element={<LicenseCard/>}/>
    <Route path='/exchanges' element={<ExchangeCard/>}/>*/}

                </Routes>
            </div>

            <div className="routes-nav">
                <RoutesNav />
            </div>
        </Router >

    )
}
export default RoutesViewer