import { Dayjs } from "dayjs"
import { ObjShortModel } from "./Model"

export type UserInfos = {
    id: String,
    name: String,
    document: String
}
export type client = {
    id: String,
    name: String,
    entryDate: Date,
    birthdate: Date,
    document: string,
    type: string,
    district: string,
    city: string,
    state: string,
    tel: string,
    email: string,
    obs: string
}
export interface UserShort extends ObjShortModel {
    id: string,
    name: string,
    document: string,
    type: string,
    email: string,
    tel: string,
    city: string
}

export type NewClient = {
    name: String,
    document: String,
    type: number,
    cep: String,
    street: String,
    number: number,
    district: String,
    city: String,
    state: String,
    tel: String,
    email: String,
    birthdate: String
}