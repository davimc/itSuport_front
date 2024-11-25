import TransferList from "../elements/TransferList";
import { DeviceShort } from "../../../models/Device";

const devices: DeviceShort[] = [
    {
        id: "12312312",
        type: "Impressora",
        brand: "Brother",
        model: "7635",
        serial: "asdasd1221",
        characteristics: "ok",
        obs: "ok"
    }]
export default function Welcome() {

    return (
        <div className="component-container">
            <h2>Welcome!</h2>
            <TransferList infos={devices} />
        </div>
    )
}