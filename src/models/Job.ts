import { Dayjs } from "dayjs"
import { DeviceShort } from "./Device"

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
    entry: String,
    clientName: String,
    techName: String,
    deviceId:String, 
    deviceObs: String,
    jobType: String,
}

export type JobDescription = {
    device: DeviceShort,
    description: string
}