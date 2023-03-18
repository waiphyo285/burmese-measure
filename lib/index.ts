import $ from "./constant";
import { exchangeUnit } from "./helpers";
import { Length, Mass, Money, Setting, UData, Volume } from "./types";

abstract class Convertor {
  data: any;
  setting: Setting;

  constructor(data: UData, setting: Setting) {
    this.data = data;
    this.setting = setting;
  }

  public abstract build(origin: UData, modify: UData): object;

  public abstract metric2Burmese(
    value: number,
    c_data: UData,
    c_setting: Setting
  ): number;

  public abstract burmese2Metric(
    value: number,
    c_data: UData,
    c_setting: Setting
  ): number;
}

class MassConvertor extends Convertor {
  constructor(data: Mass, setting: Setting) {
    super(data, setting);
  }

  public build(origin: any, modify: any) {
    return Object.assign(origin, modify);
  }

  public metric2Burmese(
    value: number,
    c_data: Mass | any = this.data,
    c_setting: Setting = this.setting
  ): number {
    if (typeof value === "number") {
      let n_data = this.build(this.data, c_data);
      let n_setting = this.build(this.setting, c_setting);

      return +(n_data[`$1_${n_setting.$to}`] * value).toFixed(
        n_setting.$decimal
      );
    } else {
      throw new Error("NAN is found.");
    }
  }

  public burmese2Metric(
    value: number,
    c_data: Mass | any = this.data,
    c_setting: Setting = exchangeUnit(this.setting)
  ): number {
    if (typeof value === "number") {
      let n_data = this.build(this.data, c_data);
      let n_setting = this.build(this.setting, c_setting);

      return +(n_data[`$1_${n_setting.$from}`] / value).toFixed(
        n_setting.$decimal
      );
    } else {
      throw new Error("NAN is found.");
    }
  }

  public kyatPae2Gram(
    k: number,
    p: number = 0,
    c_data: Mass = this.data,
    c_setting: Setting = this.setting
  ): number {
    if (typeof (k + p) === "number") {
      let [temp, gram] = [0, 0];
      let n_data = this.build(this.data, c_data);
      let n_setting = this.build(this.setting, c_setting);

      temp = k + (p > 0 ? p / 16 : 0);
      gram = temp * n_data.$1_kyat_thar;
      return +gram.toFixed(n_setting.$decimal);
    } else {
      throw new Error("NAN is found.");
    }
  }

  public kyatPaeYway2Gram(
    k: number,
    p: number = 0,
    y: number = 0,
    c_data: Mass = this.data,
    c_setting: Setting = this.setting
  ): number {
    if (typeof (k + p + y) === "number") {
      let [temp, gram] = [0, 0];
      let n_data = this.build(this.data, c_data);
      let n_setting = this.build(this.setting, c_setting);

      temp = k + (p > 0 ? p / 16 : 0) + (y > 0 ? y / 128 : 0);
      gram = temp * n_data.$1_kyat_thar;
      return +gram.toFixed(n_setting.$decimal);
    } else {
      throw new Error("NAN is found.");
    }
  }

  public gram2KyatPae(
    g: number,
    c_data: Mass = this.data,
    c_setting: Setting = this.setting
  ): number[] {
    if (typeof g === "number") {
      let [temp, kyat, pae] = [0, 0, 0];
      let n_data = this.build(this.data, c_data);
      let n_setting = this.build(this.setting, c_setting);

      temp = g / n_data.$1_kyat_thar;

      if (temp % 1 === 0) {
        return [(kyat = temp), pae];
      } else {
        kyat = ~~temp;
        temp = kyat > 0 ? (temp % kyat) * 16 : temp * 16;
        return [kyat, (pae = +temp.toFixed(n_setting.$decimal))];
      }
    } else {
      throw new Error("NAN is found.");
    }
  }

  public gram2KyatPaeYway(
    g: number,
    c_data: Mass = this.data,
    c_setting: Setting = this.setting
  ): number[] {
    if (typeof g === "number") {
      let [temp, kyat, pae, yway] = [0, 0, 0, 0];
      let n_data = this.build(this.data, c_data);
      let n_setting = this.build(this.setting, c_setting);

      temp = g / n_data.$1_kyat_thar;

      if (temp % 1 === 0) {
        return [(kyat = temp), pae, yway];
      } else {
        kyat = ~~temp;
        temp = kyat > 0 ? (temp % kyat) * 16 : temp * 16;
        pae = ~~temp;
        temp = pae > 0 ? (temp % pae) * 8 : temp * 8;
        return [kyat, pae, (yway = +temp.toFixed(n_setting.$decimal))];
      }
    } else {
      throw new Error("NAN is found.");
    }
  }
}

class LengthConvertor extends Convertor {
  constructor(data: Length, setting: Setting) {
    super(data, setting);
  }

  public build(origin: any, modify: any) {
    return Object.assign(origin, modify);
  }

  public metric2Burmese(
    value: number,
    c_data: Length | any = this.data,
    c_setting: Setting = this.setting
  ): number {
    if (typeof value === "number") {
      let n_data = this.build(this.data, c_data);
      let n_setting = this.build(this.setting, c_setting);

      return +(n_data[`$1_${n_setting.$to}`] * value).toFixed(
        n_setting.$decimal
      );
    } else {
      throw new Error("NAN is found.");
    }
  }

  public burmese2Metric(
    value: number,
    c_data: Length | any = this.data,
    c_setting: Setting = exchangeUnit(this.setting)
  ): number {
    if (typeof value === "number") {
      let n_data = this.build(this.data, c_data);
      let n_setting = this.build(this.setting, c_setting);

      return +(n_data[`$1_${n_setting.$from}`] / value).toFixed(
        n_setting.$decimal
      );
    } else {
      throw new Error("NAN is found.");
    }
  }
}

class VolumeConvertor extends Convertor {
  constructor(data: Volume, setting: Setting) {
    super(data, setting);
  }

  public build(origin: any, modify: any) {
    return Object.assign(origin, modify);
  }

  public metric2Burmese(
    value: number,
    c_data: Volume | any = this.data,
    c_setting: Setting = this.setting
  ): number {
    if (typeof value === "number") {
      let n_data = this.build(this.data, c_data);
      let n_setting = this.build(this.setting, c_setting);

      return +(n_data[`$1_${n_setting.$to}`] * value).toFixed(
        n_setting.$decimal
      );
    } else {
      throw new Error("NAN is found.");
    }
  }

  public burmese2Metric(
    value: number,
    c_data: Volume | any = this.data,
    c_setting: Setting = exchangeUnit(this.setting)
  ): number {
    if (typeof value === "number") {
      let n_data = this.build(this.data, c_data);
      let n_setting = this.build(this.setting, c_setting);

      return +(n_data[`$1_${n_setting.$from}`] / value).toFixed(
        n_setting.$decimal
      );
    } else {
      throw new Error("NAN is found.");
    }
  }
}

class MoneyConvertor {
  data: any;
  setting: Setting;

  constructor(data: UData, setting: Setting) {
    this.data = data;
    this.setting = setting;
  }

  public build(origin: any, modify: any) {
    return Object.assign(origin, modify);
  }
}

const massConvertor = new MassConvertor($.$mass_data, $.$mass_setting);
const lengthConvertor = new LengthConvertor($.$length_data, $.$length_setting);
const volumeConvertor = new VolumeConvertor($.$volume_data, $.$volume_setting);
const moneyConvertor = new MoneyConvertor($.$money_data, $.$money_setting);

export = {
  massConvertor,
  lengthConvertor,
  volumeConvertor,
  moneyConvertor,
};
