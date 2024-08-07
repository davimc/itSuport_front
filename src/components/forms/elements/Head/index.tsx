import { Rtt } from "@mui/icons-material"
import { Paper, Table, TableCell, TableContainer, TableRow, TableHead, TableBody } from "@mui/material"
import { tbHead } from "../../../../utils/types/types"

interface tbComponents {
    title: string
    infos: tbHead[]
    children: JSX.Element[]
}

export default function Head(props: tbComponents) {
    return (
        <TableContainer component={Paper}>
            <h2>{props.title}</h2>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow >
                        {props.infos.map((info) => {
                            return (
                                <TableCell sx={{ fontWeight: 'bold' }}  key={info.id}>{info.desc}</TableCell>
                            )
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.children}
                </TableBody>
            </Table>
        </TableContainer>
    )
}