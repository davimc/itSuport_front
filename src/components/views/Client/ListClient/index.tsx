import { TableCell, TableRow } from "@mui/material"
import Head from "../../elements/Head"
import { tbHead } from "../../../../utils/types/types"

const heads: tbHead[] = [
    { id: 1, desc: 'NOME' },
    { id: 2, desc: 'DOCUMENTO' },
    { id: 3, desc: 'TIPO' },
    { id: 4, desc: 'BAIRRO' },
    { id: 5, desc: 'CIDADE' },
    { id: 6, desc: 'UF' },
    { id: 7, desc: 'TELEFONE' },
    { id: 8, desc: 'EMAIL' }
]

function createData(
    name: string,
    document: string,
    type: string,
    district: string,
    city: string,
    state: string,
    tel: string,
    email: string
) {
    return { name, document, type, district, city, state, tel, email };
}
const rows = [
    createData('Gilberto', "656.643.123-32", "FÍSICA", "São Francisco", "São Luís", "MA", "98 9 9322-1234", "Gilberto@gmail.com"),
    createData('Adalberto Filisberto Gilberto Carlobertos', "00.123.545/0001-37", "JURÍDICA", "Centro", "São Luís", "MA", "9 98821-2346", "ABFC@google.com"),
    /*
    createData(49, 'Filisberto', "Retorno", "Keneston", 370.10),
    createData(48, 'CArloberto', "Aguardando", "Davi", 0),*/
];

export default function ListClient() {
    return (
        <Head title='Serviços' infos={heads} >
            {rows.map(row => {
                return (
                    <TableRow
                        key={row.document}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell sx={{ width: 400 }}>{row.name}</TableCell>
                        <TableCell component="th" scope="row" sx={{ minWidth: 150 }}>
                            {row.document}
                        </TableCell>
                        <TableCell> {row.type} </TableCell>
                        <TableCell> {row.district} </TableCell>
                        <TableCell> {row.city} </TableCell>
                        <TableCell> {row.state} </TableCell>
                        <TableCell> {row.tel} </TableCell>
                        <TableCell> {row.email} </TableCell>


                    </TableRow>
                )
            })}
        </Head>
    )
}