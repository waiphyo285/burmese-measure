import { Length, Mass, Setting, UData, Volume } from "./types";
declare abstract class Convertor {
    data: any;
    setting: Setting;
    constructor(data: UData, setting: Setting);
    abstract build(origin: UData, modify: UData): object;
    abstract metric2Burmese(value: number, c_data: UData, c_setting: Setting): number;
    abstract burmese2Metric(value: number, c_data: UData, c_setting: Setting): number;
}
declare class MassConvertor extends Convertor {
    constructor(data: Mass, setting: Setting);
    build(origin: any, modify: any): any;
    metric2Burmese(value: number, c_data?: Mass | any, c_setting?: Setting): number;
    burmese2Metric(value: number, c_data?: Mass | any, c_setting?: Setting): number;
    kyatPae2Gram(k: number, p?: number, c_data?: Mass, c_setting?: Setting): number;
    kyatPaeYway2Gram(k: number, p?: number, y?: number, c_data?: Mass, c_setting?: Setting): number;
    gram2KyatPae(g: number, c_data?: Mass, c_setting?: Setting): number[];
    gram2KyatPaeYway(g: number, c_data?: Mass, c_setting?: Setting): number[];
}
declare class LengthConvertor extends Convertor {
    constructor(data: Length, setting: Setting);
    build(origin: any, modify: any): any;
    metric2Burmese(value: number, c_data?: Length | any, c_setting?: Setting): number;
    burmese2Metric(value: number, c_data?: Length | any, c_setting?: Setting): number;
}
declare class VolumeConvertor extends Convertor {
    constructor(data: Volume, setting: Setting);
    build(origin: any, modify: any): any;
    metric2Burmese(value: number, c_data?: Volume | any, c_setting?: Setting): number;
    burmese2Metric(value: number, c_data?: Volume | any, c_setting?: Setting): number;
}
declare const _default: {
    massConvertor: MassConvertor;
    lengthConvertor: LengthConvertor;
    volumeConvertor: VolumeConvertor;
};
export = _default;
