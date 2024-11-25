import { Tooltip } from "@mui/material";
import { DeviceShort } from "../../../../models/Device";
import { PrintIcon, ComputerIcon, PowerIcon, LaptopIcon, ScannerIcon, HelpOutlineIcon, SmartphoneIcon } from '@mui/icons-material';

const defineIcon = (type: string) => {
    switch (type) {
        case 'Impressora': PrintIcon; break;
        case 'Scanner': ScannerIcon; break;
        case 'PC': ComputerIcon; break;
        case 'Laptop': LaptopIcon; break;
        case 'NoBreak': PowerIcon; break;
        case 'Estabilizador': PowerIcon; break;
        case 'Smartphone': SmartphoneIcon; break;
        case 'Outros': HelpOutlineIcon; break;
    }
}
interface TransferItemProps {
    item: DeviceShort,
    tipPlacemet: string
}

export default function TransferListItemDevice(props: TransferItemProps) {
    <div>
        <Tooltip title={props.item.serial} placement={props.tipPlacemet}>
            <span>
                defineIcon({props.item.type}) +" | "+ {props.item.brand} + " "+ {props.item.model}
            </span>
        </Tooltip>
    </div>


}