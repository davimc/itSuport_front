import { TableCell, TableRow } from "@mui/material"
import axios from 'axios'
import { BASE_URL } from '../../../../utils/request'
import { shortUser } from '../../../../models/Client'
import { useEffect, useState } from "react"
import SimpleTable from "../../elements/SimpleTable"
import { GridColDef } from "@mui/x-data-grid"


const heads: GridColDef[] = [
    { field: 'name', headerName: 'Nome', width: 200 },
    { field: 'document', headerName: 'Documento', width: 180 },
    { field: 'type', headerName: 'Tipo', width: 60 },
    { field: 'email', headerName: 'E-mail', width: 180 },
    { field: 'tel', headerName: 'Telefone', width: 180 }]


export default function ListClient() {
    const [clients, setClients] = useState<shortUser[]>([])
    
    useEffect(() => {
         axios.get(`${BASE_URL}/users/costumers`)
             .then(response => { (setClients(response.data.content)) })
     }, [])
    return (
        <SimpleTable title='Clientes' columns={heads} rows={clients}  />
    )
}