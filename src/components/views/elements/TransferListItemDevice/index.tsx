import { DeviceShort } from "../../../../models/Device";
import {PrintIcon, ComputerIcon, PowerIcon, LaptopIcon, ScannerIcon, HelpOutlineIcon, SmartphoneIcon} from '@mui/icons-material';

const defineIcon = (type:string) => {
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
export default function TransferListItemDevice(props: DeviceShort) {
    <div>
        <span></span>
    </div>


}