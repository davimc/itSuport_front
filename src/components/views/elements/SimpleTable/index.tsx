import { TableContainer, Table, TableBody, Paper } from "@mui/material";
import HeadTable from "../HeadTable";

interface tbComponents {
    title: string
    infos: string[]
    children: JSX.Element[]
}

export default function SimpleTable(props: tbComponents) {
    return (
        <TableContainer component={Paper}>

            <h2>{props.title}</h2>
            <HeadTable heads={props.infos} />
            <Table sx={{ minWidth: 650 }} aria-label="simple table"></Table>
            <TableBody>
                {props.children}
            </TableBody>
        </TableContainer>
    )
}