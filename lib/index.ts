// Standard value
const $ = {
  $setting: {
    $decimal: 6,
  },
  // Length (Burmese <-> Metric Unit (based meter))
  $meter: {
    $1_sanchi: 7.9375e-5,
    $1_hnan: 7.9375e-4,
    $1_muyaw: 4.7625e-3,
    $1_let_thit: 1.905e-2,
    $1_maik: 1.524e-1,
    $1_htwa: 2.286e-1,
    $1_taung: 4.572e-1,
    $1_lan: 1.8288,
    $1_ta: 3.2004,
    $1_out_thaba: 64.008,
    $1_kawtha: 1280.16,
    $1_ga_wout: 5120.64,
    $1_yuzana: 20482.56,
  },
  // Mass (Burmese <-> Metric Unit (based gram))
  $gram: {
    $1_yway_lay: 1.36078e-1,
    $1_yway_gyi: 2.72155e-1,
    $1_pae_thar: 1.02058,
    $1_mu_thar: 2.04117,
    $1_mat_thar: 4.08233,
    $5_mue_thar: 8.16466,
    $1_kyat_thar: 16.3293,
    $a_wat_thar: 204.117,
    $a_seit_thar: 408.233,
    $50_seit_thar: 816.466,
    $1_pate_thar: 1632.93,
    $100_pate_thar: 163293,
  },
  // Volume (Burmese <-> Metric Unit (based liter))
  $liter: {
    $1_la_myu: 7.99118e-2,
    $1_la_myet: 1.59824e-1,
    $1_la_me: 3.19647e-1,
    $1_sa_le: 6.39294e-1,
    $1_hkwet: 1.27859,
    $1_pyi: 2.55718,
    $1_seit: 10.2287,
    $1_hkwe: 20.4574,
    $1_tin: 40.9148,
  },
  // Money (Burmese units)
  $kyat: {
    $1_pya: 0.01,
    $1_mu: 0.1,
    $1_mat: 0.25,
    $5_mu: 0.5,
  },
};

interface ISetting {
  $decimal: number;
}

interface ILengthData {
  $1_sanchi: number;
  $1_hnan: number;
  $1_muyaw: number;
  $1_let_thit: number;
  $1_maik: number;
  $1_htwa: number;
  $1_taung: number;
  $1_lan: number;
  $1_ta: number;
  $1_out_thaba: number;
  $1_kawtha: number;
  $1_ga_wout: number;
  $1_yuzana: number;
}

interface IMassData {
  $1_yway_lay: number;
  $1_yway_gyi: number;
  $1_pae_thar: number;
  $1_mu_thar: number;
  $1_mat_thar: number;
  $5_mue_thar: number;
  $1_kyat_thar: number;
  $a_wat_thar: number;
  $a_seit_thar: number;
  $50_seit_thar: number;
  $1_pate_thar: number;
  $100_pate_thar: number;
}

interface IVolumeData {
  $1_la_myu: number;
  $1_la_myet: number;
  $1_la_me: number;
  $1_sa_le: number;
  $1_hkwet: number;
  $1_pyi: number;
  $1_seit: number;
  $1_hkwe: number;
  $1_tin: number;
}

interface IMoneyData {
  $1_pya: number;
  $1_mu: number;
  $1_mat: number;
  $5_mu: number;
}

abstract class Convertor {
  data: any;
  setting: ISetting;

  constructor(data: any, setting: ISetting) {
    this.data = data;
    this.setting = setting;
  }

  public abstract build(data: any, c_data: any): any;
}

class MassConvertor extends Convertor {
  constructor(data: IMassData, setting: ISetting) {
    super(data, setting);
  }

  public build(data: any, c_data: any) {
    return Object.assign(data, c_data);
  }

  public kyatPae2Gram(
    k: number,
    p: number = 0,
    c_data: IMassData = this.data,
    c_setting: ISetting = this.setting
  ): number {
    /*
     * @param {number} k: ကျပ်,
     * @param {number} p: ပဲ,
     * @param {Object} c_data: IMassData,
     * @param {Object} c_setting: ISetting,
     * @return {number} g: gram,
     */

    if (typeof (k + p) === "number") {
      let [temp, gram] = [0, 0];
      let n_data = this.build(this.data, c_data);

      temp = k + (p > 0 ? p / 16 : 0);
      gram = temp * n_data.$1_kyat_thar;
      return +gram.toFixed(c_setting.$decimal);
    } else {
      throw new Error("NAN is found.");
    }
  }

  public kyatPaeYway2Gram(
    k: number,
    p: number = 0,
    y: number = 0,
    c_data: IMassData = this.data,
    c_setting: ISetting = this.setting
  ): number {
    /*
     * @param {number} k: ကျပ်,
     * @param {number} p: ပဲ,
     * @param {number} y: ရွေး,
     * @param {Object} c_data: IMassData,
     * @param {Object} c_setting: ISetting,
     * @return {number} g: gram
     */

    if (typeof (k + p + y) === "number") {
      let [temp, gram] = [0, 0];
      let n_data = this.build(this.data, c_data);

      temp = k + (p > 0 ? p / 16 : 0) + (y > 0 ? y / 128 : 0);
      gram = temp * n_data.$1_kyat_thar;
      return +gram.toFixed(c_setting.$decimal);
    } else {
      throw new Error("NAN is found.");
    }
  }

  public gram2KyatPae(
    g: number,
    c_data: IMassData = this.data,
    c_setting: ISetting = this.setting
  ): number[] {
    /*
     * @param {number} g: gram,
     * @param {Object} c_data: IMassData,
     * @param {Object} c_setting: ISetting,
     * @return {number[]} ကျပ်,ပဲ
     */

    if (typeof g === "number") {
      let [temp, kyat, pae] = [0, 0, 0];
      let n_data = this.build(this.data, c_data);

      temp = g / n_data.$1_kyat_thar;

      if (temp % 1 === 0) {
        return [(kyat = temp), pae];
      } else {
        kyat = ~~temp;
        temp = kyat > 0 ? (temp % kyat) * 16 : temp * 16;
        return [kyat, (pae = +temp.toFixed(c_setting.$decimal))];
      }
    } else {
      throw new Error("NAN is found.");
    }
  }

  public gram2KyatPaeYway(
    g: number,
    c_data: IMassData = this.data,
    c_setting: ISetting = this.setting
  ): number[] {
    /*
     * @param {number} g: gram,
     * @param {Object} c_data: IMassData,
     * @param {Object} c_setting: ISetting,
     * @return {number[]} ကျပ်,ပဲ,ရွေး
     */

    if (typeof g === "number") {
      let [temp, kyat, pae, yway] = [0, 0, 0, 0];
      let n_data = this.build(this.data, c_data);

      temp = g / n_data.$1_kyat_thar;

      if (temp % 1 === 0) {
        return [(kyat = temp), pae, yway];
      } else {
        kyat = ~~temp;
        temp = kyat > 0 ? (temp % kyat) * 16 : temp * 16;
        pae = ~~temp;
        temp = pae > 0 ? (temp % pae) * 8 : temp * 8;
        return [kyat, pae, (yway = +temp.toFixed(c_setting.$decimal))];
      }
    } else {
      throw new Error("NAN is found.");
    }
  }
}

class LengthConvertor extends Convertor {
  constructor(data: ILengthData, setting: ISetting) {
    super(data, setting);
  }

  public build(data: any, c_data: any) {
    return Object.assign(data, c_data);
  }
}

class VolumeConvertor extends Convertor {
  constructor(data: IVolumeData, setting: ISetting) {
    super(data, setting);
  }

  public build(data: any, c_data: any) {
    return Object.assign(data, c_data);
  }
}

class MoneyConvertor extends Convertor {
  constructor(data: IMoneyData, setting: ISetting) {
    super(data, setting);
  }

  public build(data: any, c_data: any) {
    return Object.assign(data, c_data);
  }
}

const massConvertor = new MassConvertor($.$gram, $.$setting);
const lengthConvertor = new LengthConvertor($.$meter, $.$setting);
const volumeConvertor = new VolumeConvertor($.$liter, $.$setting);
const moneyConvertor = new MoneyConvertor($.$kyat, $.$setting);

export = {
  massConvertor,
  lengthConvertor,
  volumeConvertor,
  moneyConvertor,
};
