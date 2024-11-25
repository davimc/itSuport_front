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
export class UserShort implements ObjShortModel {
    constructor(private id: string, private name: string, private type: string, private document: string) {
        this.id = id;
        this.type = type;
        this.name = name;
        this.document = document;
    }

    getId(): string { return this.id }
    getName(): string { return this.name; }
    getComplement(): string | null { return null }
    getIdentifier(): string { return this.document }
    getType(): string { return this.type }
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