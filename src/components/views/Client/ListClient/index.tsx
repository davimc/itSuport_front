import { TableCell, TableRow } from "@mui/material"
import axios from 'axios'
import { BASE_URL } from '../../../../utils/request'
import { Client } from '../../../../models/Client'
import { useMemo, useState } from "react"
import SimpleTable from "../../elements/SimpleTable"


const heads: string[] =
    ['NOME', 'DOCUMENTO', 'TIPO', 'BAIRRO', 'CIDADE', 'UF', 'TELEFONE', 'EMAIL']

export default function ListClient() {
    const [clients, setClients] = useState<Client[]>([])
    useMemo(() => {
        axios.get(`${BASE_URL}/clients`)
            .then(response => { (setClients(response.data.content)) })
    }, [])
    return (
        <SimpleTable title='Clientes' infos={heads} >

            {clients.map(client => {
                return (
                    <TableRow
                        key={client.document}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell sx={{ width: 400 }}>{client.name}</TableCell>
                        <TableCell component="th" scope="row" sx={{ minWidth: 150 }}>
                            {client.document}
                        </TableCell>
                        <TableCell> {client.type} </TableCell>
                        <TableCell> {client.district} </TableCell>
                        <TableCell> {client.city} </TableCell>
                        <TableCell> {client.state} </TableCell>
                        <TableCell> {client.tel} </TableCell>
                        <TableCell> {client.email} </TableCell>


                    </TableRow>
                )
            })}
        </SimpleTable>
    )
}