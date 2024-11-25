import { ObjShortModel } from './Model'

export default class DeviceShort implements ObjShortModel {
    private id: string = '';
    private type: string = '';
    private brand: string = '';
    private model: string = '';
    private serial: string = '';

    constructor(id: string, type: string, brand: string, model: string, serial: string) {
        this.id = id;
        this.type = type;
        this.brand = brand;
        this.model = model;
        this.serial = serial;
    }

    getId(): string { return this.id };
    getName(): string { return this.brand };
    getComplement(): string { return this.model };
    getIdentifier(): string { return this.serial };
    getType(): string { return this.type };
};