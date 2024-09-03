

export type Client = {
    id: String,
    name: String,
    entryDate: Date,
    birthdate: Date,
    document:string,
    type: string,
    district: string,
    city:string,
    state: string,
    tel: string,
    email: string
}

export type newClient = {
    name: string,
    document: string,
    type: string,
    cep: string,
    street: string,
    district: string,
    city: string,
    state: string,
    tel: string,
    email: string,
    birthdate: Date|null
}