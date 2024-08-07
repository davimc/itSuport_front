import { v4 as uuidv4 } from 'uuid'

export type DeviceShort = {
    id: string, 
    deviceType: string,
    brand: string,
    model: string,
    characteristics: string,
    obs: string
};