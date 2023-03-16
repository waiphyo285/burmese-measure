"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Standard value
var $ = {
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
var Convertor = /** @class */ (function () {
    function Convertor(data, setting) {
        this.data = data;
        this.setting = setting;
    }
    return Convertor;
}());
var MassConvertor = /** @class */ (function (_super) {
    __extends(MassConvertor, _super);
    function MassConvertor(data, setting) {
        return _super.call(this, data, setting) || this;
    }
    MassConvertor.prototype.build = function (data, c_data) {
        return Object.assign(data, c_data);
    };
    MassConvertor.prototype.kyatPae2Gram = function (k, p, c_data, c_setting) {
        /*
         * @param {number} k: ကျပ်,
         * @param {number} p: ပဲ,
         * @param {Object} c_data: IMassData,
         * @param {Object} c_setting: ISetting,
         * @return {number} g: gram,
         */
        if (p === void 0) { p = 0; }
        if (c_data === void 0) { c_data = this.data; }
        if (c_setting === void 0) { c_setting = this.setting; }
        if (typeof (k + p) === "number") {
            var _a = [0, 0], temp = _a[0], gram = _a[1];
            var n_data = this.build(this.data, c_data);
            temp = k + (p > 0 ? p / 16 : 0);
            gram = temp * n_data.$1_kyat_thar;
            return +gram.toFixed(c_setting.$decimal);
        }
        else {
            throw new Error("NAN is found.");
        }
    };
    MassConvertor.prototype.kyatPaeYway2Gram = function (k, p, y, c_data, c_setting) {
        /*
         * @param {number} k: ကျပ်,
         * @param {number} p: ပဲ,
         * @param {number} y: ရွေး,
         * @param {Object} c_data: IMassData,
         * @param {Object} c_setting: ISetting,
         * @return {number} g: gram
         */
        if (p === void 0) { p = 0; }
        if (y === void 0) { y = 0; }
        if (c_data === void 0) { c_data = this.data; }
        if (c_setting === void 0) { c_setting = this.setting; }
        if (typeof (k + p + y) === "number") {
            var _a = [0, 0], temp = _a[0], gram = _a[1];
            var n_data = this.build(this.data, c_data);
            temp = k + (p > 0 ? p / 16 : 0) + (y > 0 ? y / 128 : 0);
            gram = temp * n_data.$1_kyat_thar;
            return +gram.toFixed(c_setting.$decimal);
        }
        else {
            throw new Error("NAN is found.");
        }
    };
    MassConvertor.prototype.gram2KyatPae = function (g, c_data, c_setting) {
        /*
         * @param {number} g: gram,
         * @param {Object} c_data: IMassData,
         * @param {Object} c_setting: ISetting,
         * @return {number[]} ကျပ်,ပဲ
         */
        if (c_data === void 0) { c_data = this.data; }
        if (c_setting === void 0) { c_setting = this.setting; }
        if (typeof g === "number") {
            var _a = [0, 0, 0], temp = _a[0], kyat = _a[1], pae = _a[2];
            var n_data = this.build(this.data, c_data);
            temp = g / n_data.$1_kyat_thar;
            if (temp % 1 === 0) {
                return [(kyat = temp), pae];
            }
            else {
                kyat = ~~temp;
                temp = kyat > 0 ? (temp % kyat) * 16 : temp * 16;
                return [kyat, (pae = +temp.toFixed(c_setting.$decimal))];
            }
        }
        else {
            throw new Error("NAN is found.");
        }
    };
    MassConvertor.prototype.gram2KyatPaeYway = function (g, c_data, c_setting) {
        /*
         * @param {number} g: gram,
         * @param {Object} c_data: IMassData,
         * @param {Object} c_setting: ISetting,
         * @return {number[]} ကျပ်,ပဲ,ရွေး
         */
        if (c_data === void 0) { c_data = this.data; }
        if (c_setting === void 0) { c_setting = this.setting; }
        if (typeof g === "number") {
            var _a = [0, 0, 0, 0], temp = _a[0], kyat = _a[1], pae = _a[2], yway = _a[3];
            var n_data = this.build(this.data, c_data);
            temp = g / n_data.$1_kyat_thar;
            if (temp % 1 === 0) {
                return [(kyat = temp), pae, yway];
            }
            else {
                kyat = ~~temp;
                temp = kyat > 0 ? (temp % kyat) * 16 : temp * 16;
                pae = ~~temp;
                temp = pae > 0 ? (temp % pae) * 8 : temp * 8;
                return [kyat, pae, (yway = +temp.toFixed(c_setting.$decimal))];
            }
        }
        else {
            throw new Error("NAN is found.");
        }
    };
    return MassConvertor;
}(Convertor));
var LengthConvertor = /** @class */ (function (_super) {
    __extends(LengthConvertor, _super);
    function LengthConvertor(data, setting) {
        return _super.call(this, data, setting) || this;
    }
    LengthConvertor.prototype.build = function (data, c_data) {
        return Object.assign(data, c_data);
    };
    return LengthConvertor;
}(Convertor));
var VolumeConvertor = /** @class */ (function (_super) {
    __extends(VolumeConvertor, _super);
    function VolumeConvertor(data, setting) {
        return _super.call(this, data, setting) || this;
    }
    VolumeConvertor.prototype.build = function (data, c_data) {
        return Object.assign(data, c_data);
    };
    return VolumeConvertor;
}(Convertor));
var MoneyConvertor = /** @class */ (function (_super) {
    __extends(MoneyConvertor, _super);
    function MoneyConvertor(data, setting) {
        return _super.call(this, data, setting) || this;
    }
    MoneyConvertor.prototype.build = function (data, c_data) {
        return Object.assign(data, c_data);
    };
    return MoneyConvertor;
}(Convertor));
var massConvertor = new MassConvertor($.$gram, $.$setting);
var lengthConvertor = new LengthConvertor($.$meter, $.$setting);
var volumeConvertor = new VolumeConvertor($.$liter, $.$setting);
var moneyConvertor = new MoneyConvertor($.$kyat, $.$setting);
module.exports = {
    massConvertor: massConvertor,
    lengthConvertor: lengthConvertor,
    volumeConvertor: volumeConvertor,
    moneyConvertor: moneyConvertor,
};
