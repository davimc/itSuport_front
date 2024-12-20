import { useEffect, useState } from 'react';


import axios from 'axios';

import { GridColDef } from '@mui/x-data-grid';
import { BASE_URL } from '../../../../utils/request';
import SimpleTable from '../../elements/SimpleTable';
import { Job } from '../../../../models/Job';


const heads: GridColDef[] = [
    { field: 'os', headerName: 'OS', width: 70 },
    { field: 'clientName', headerName: 'Name', width: 200 },
    { field: 'status', headerName: 'STATUS', width: 130 },
    { field: 'techName', headerName: 'Técnico', width: 180 },
    { field: 'total', headerName: 'Valor R$', width: 120, type: 'number' }]

    
export default function ListJobs() {
    const [jobs, setJobs] = useState<Job[]>([])
    useEffect(() => {
        axios.get(`${BASE_URL}/jobs`)
            .then(response => {
                (setJobs(response.data.content))
            })
    }, [])

    return (
        
        <SimpleTable title='Serviços' columns={heads} rows={jobs} >
            
        </SimpleTable>

    )
}