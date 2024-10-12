import { TableContainer, Table, TableBody, Paper } from "@mui/material";
import { DataGrid, GridColDef } from '@mui/x-data-grid';

interface tbComponents {
    title: string
    columns: GridColDef[],
    rows: any[]
}

const paginationModel = { page: 0, pageSize: 5 }

export default function SimpleTable(props: tbComponents) {
    return (

        <TableContainer component={Paper} sx={{ height: 400, width: '100%' }}>

            <h2>{props.title}</h2>
            <DataGrid
                rows={props.rows}
                columns={props.columns}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[5, 10]}
                // checkboxSelection
                sx={{ border: 0 }}
            />
            {/* 
            <HeadTable heads={props.infos} />
            <Table sx={{ minWidth: 650 }} aria-label="simple table"></Table>
            <TableBody>
                {props.children}
            </TableBody> */}
        </TableContainer>
    )
}