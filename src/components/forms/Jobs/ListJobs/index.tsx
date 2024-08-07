import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Head from '../../elements/Head'
import { useMemo } from 'react';
import { tbHead } from '../../../../utils/types/types';

function createData(
    os: number,
    name: string,
    status: string,
    tec: string,
    payment: number,
) {
    return { os, name, status, tec, payment };
}
const heads: tbHead[] = [
    { id: 1, desc: 'OS' },
    { id: 2, desc: 'NOME' },
    { id: 3, desc: 'STATUS' },
    { id: 4, desc: 'TÉCNICO' },
    { id: 5, desc: 'VALOR' }
]
const rows = [
    createData(100, 'Gilberto', "Orçado", "Davi", 0.00),
    createData(50, 'Adalberto Filisberto Gilberto Carlobertos', "Concluído", "Keneston", 240.50),
    createData(49, 'Filisberto', "Retorno", "Keneston", 370.10),
    createData(48, 'CArloberto', "Aguardando", "Davi", 0),
];

// const memo = useMemo(() => {
//     axios.
// })


export default function ListJobs() {

    return (
        <>
            <Head title='Serviços' infos={heads} >
            {rows.map(row => {
                return(
                    <TableRow
                        key={row.os}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell >{row.os.toString().padStart(5, '0')}</TableCell>
                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>
                        <TableCell >{row.status}</TableCell>
                        <TableCell >{row.tec}</TableCell>
                        <TableCell  >R$ {row.payment.toFixed(2)}</TableCell>

                    </TableRow>
                )})}
            </Head>
            
        </>
    )
}