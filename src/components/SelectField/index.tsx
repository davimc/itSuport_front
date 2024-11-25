import { MenuItem, Select, Tooltip } from "@mui/material"
import { ObjShortModel } from "../../models/Model"

interface selectFieldProps {
    handleChange: Function
    setInfos: (value: String) => void
    valueList: ObjShortModel[],
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
                    value={(item.getId)}>
                    <Tooltip key={index} title={item.getIdentifier()} placement='right'>
                        <span>{item.getName()} {item.getComplement() !== null || item.getComplement() !== undefined ? ' | ' + item.getComplement() : ''} </span>
                    </Tooltip>
                </MenuItem>
            ))}
        </Select>
    )
}