import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import NewJob from '../forms/NewJobs'
import RoutesNav from '../RoutesNav'
import './styles.css'

function RoutesViewer() {
    return (
        <div className="routes-viewer">
            <Router>
                <div className="routes-nav">
                    <RoutesNav />
                </div>
                <Routes>
                    <Route path='/' element={<NewJob />} />
                    <Route path='/jobs' element={<NewJob />} />
                    {/*<Route path='/stores' element={<StoreCard/>}/>

                    //<Route path='/employees' element={<EmployeeCard/>}/>
                    //<Route path='/licenses' element={<LicenseCard/>}/>
    <Route path='/exchanges' element={<ExchangeCard/>}/>*/}

                </Routes>
                {/*<div className='cardnav'>
                        <CardNav />
                    </div>*/}

            </Router>

        </div>
    )
}
export default RoutesViewer