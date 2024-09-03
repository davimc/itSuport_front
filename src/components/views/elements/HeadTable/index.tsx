import { TableCell, TableRow, TableHead} from "@mui/material"

type tbHead = {
    heads: string[]
}
export default function HeadTable(props: tbHead) {
    return (
        <>

            <TableHead>
                <TableRow >
                    {props.heads.map((info, index) => {
                        return (
                            <TableCell sx={{ fontWeight: 'bold' }} key={index}>{info}</TableCell>
                        )
                    })}
                </TableRow>
            </TableHead>
        </>
    )
}