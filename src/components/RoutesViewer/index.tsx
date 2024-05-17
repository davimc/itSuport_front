import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import NewJob from '../forms/NewJobs'

function RoutesViewer() {
    return(
        <div className="routesviewer">
            <Router>
                <Routes>
                    <Route path='/' element={<NewJob/>}/>

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