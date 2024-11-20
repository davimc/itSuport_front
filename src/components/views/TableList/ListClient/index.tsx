import axios from 'axios'
import { BASE_URL } from '../../../../utils/request'
import { UserShort } from '../../../../models/Client'
import { useEffect, useState } from "react"

import { GridColDef } from "@mui/x-data-grid"
import SimpleTable from '../../elements/SimpleTable'


const heads: GridColDef[] = [
    { field: 'name', headerName: 'Nome', width: 200 },
    { field: 'document', headerName: 'Documento', width: 180 },
    { field: 'type', headerName: 'Tipo', width: 60 },
    { field: 'email', headerName: 'E-mail', width: 180 },
    { field: 'tel', headerName: 'Telefone', width: 180 }]


export default function ListClient() {
    const [clients, setClients] = useState<UserShort[]>([])

    useEffect(() => {
        axios.get(`${BASE_URL}/users/costumers`)
            .then(response => { (setClients(response.data.content)) })
    }, [])
    return (
        <SimpleTable title='Clientes' columns={heads} rows={clients} />
    )
}