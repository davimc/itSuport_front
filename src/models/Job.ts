import { DeviceShort } from "./device"

export type Job {
    id: String,
    createdAt: Date,
    finishedAt: Date
    descriptions: String[],

}

export type JobDescription {
    device: DeviceShort,
    description: string
}