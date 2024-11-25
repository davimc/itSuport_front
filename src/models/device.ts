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

    getId(): string = this.id;
    getName: string = this.brand;
    getComplement: string = this.model;
    getIdentifier: string = this.serial;
    getType: string = this.type;
};