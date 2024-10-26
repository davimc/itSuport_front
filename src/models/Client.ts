import { Dayjs } from "dayjs"


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
export type shortUser = {
    id: string,
    name: string,
    document: string,
    type: string,
    email: string,
    tel: string,
    city: string
}

export type newClient = {
    name: String,
    document: String,
    type: String,
    cep: String,
    street: String,
    district: String,
    city: String,
    state: String,
    tel: String,
    email: String,
    birthdate: Dayjs | null
}