

export type client = {
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
    email: string,
    obs: string
}
export type shortUser = {
    id: string,
    name: string,
    email: string,    
    tel: string,
    city: string
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