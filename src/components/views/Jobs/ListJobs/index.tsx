import SimpleTable from '../../elements/SimpleTable';


const heads: string[] = ['OS', 'NOME','STATUS', 'TÉCNICO', 'VALOR']

// const memo = useMemo(() => {
//     axios.
// })


export default function ListJobs() {

    return (
        <SimpleTable title='Serviços' infos={heads} >
                <p>Correção</p>
                <p>Mais tarde</p>
            {/* {rows.map(row => {
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
                )})} */}
            </SimpleTable>
            
    )
}