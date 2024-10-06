import { Dayjs } from "dayjs"
import { DeviceShort } from "./device"

export type Job = {
    id: String,
    os: number,
    clientName: string 
    status:string,
    techName: string,
    createdAt: Date,
    type: string,
    finishedAt: Date
    total: number
}

export type NewJob = {
    entry: Dayjs,
    clientName: string,
    deviceType: string,
    deviceSerial: string,
    deviceBrand: string,
    deviceModel: string, 
    deviceObs: string,
    typeJob: string,
}

export type JobDescription = {
    device: DeviceShort,
    description: string
}