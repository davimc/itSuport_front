import { MenuItem, Select, SelectChangeEvent, Tooltip } from "@mui/material"
import { UserInfos } from "../../models/Client"

interface selectFieldProps {
    handleChange: Function
    setInfos: (value: String) => void
    valueList: UserInfos[]
}

export default function SelectField(props: selectFieldProps) {

    return (
        <Select className='input' variant="outlined"
        defaultValue={''}
        onChange={(event) => props.handleChange(event, props.setInfos)}
    >
        {props.valueList.map((item, index) => (
            <MenuItem
                key={index}
                value={String(item.id)}>
                <Tooltip key={index} title={item.document} placement='right'>
                    <span>{item.name}</span>
                </Tooltip>
            </MenuItem>
        ))}
    </Select>
    )
}