import { useEffect, useState } from 'react';
import SimpleTable from '../../elements/SimpleTable';
import { Job } from '../../../../models/Job'
import axios from 'axios';
import { BASE_URL } from '../../../../utils/request';
import { TableCell, TableRow } from '@mui/material';


const heads: string[] = ['OS', 'NOME CLIENTE', 'STATUS', 'TÉCNICO', 'VALOR']

    
export default function ListJobs() {
    const [jobs, setJobs] = useState<Job[]>([])
    useEffect(() => {
        axios.get(`${BASE_URL}/jobs`)
            .then(response => {
                (setJobs(response.data.content))
            })
    }, [])

    return (
        <SimpleTable title='Serviços' infos={heads} >
            {jobs.map(job => {
                return (
                    <TableRow
                        key={job.os}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell >{job.os.toString().padStart(5, '0')}</TableCell>
                        <TableCell component="th" scope="row">
                            {job.clientName}
                        </TableCell>
                        <TableCell >{job.status}</TableCell>
                        <TableCell >{job.techName}</TableCell>
                        <TableCell  > {job.total.toFixed(2)}</TableCell>

                    </TableRow>
                )
            })}
        </SimpleTable>

    )
}