import { Button, Card, CardHeader, Checkbox, Divider, Grid, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { ReactNode, useState } from "react";
import TransferList from "../elements/TransferList";
import { DeviceShort } from "../../../models/Device";

const devices:DeviceShort[] = [{id: "12312312", 
    deviceType: "Impressora",
    brand: "Brother",
    model: "7635",
    characteristics: "ok",
    obs: "ok"}]
export default function Welcome() {
    
    return (
        <div className="component-container">
            <h2>Welcome!</h2>
            <TransferList infos={devices}/>
        </div>
    )
}