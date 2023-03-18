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
var constant_1 = require("./constant");
var helpers_1 = require("./helpers");
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
    MassConvertor.prototype.build = function (origin, modify) {
        return Object.assign(origin, modify);
    };
    MassConvertor.prototype.metric2Burmese = function (value, c_data, c_setting) {
        if (c_data === void 0) { c_data = this.data; }
        if (c_setting === void 0) { c_setting = this.setting; }
        if (typeof value === "number") {
            var n_data = this.build(this.data, c_data);
            var n_setting = this.build(this.setting, c_setting);
            return +(n_data["$1_".concat(n_setting.$to)] * value).toFixed(n_setting.$decimal);
        }
        else {
            throw new Error("NAN is found.");
        }
    };
    MassConvertor.prototype.burmese2Metric = function (value, c_data, c_setting) {
        if (c_data === void 0) { c_data = this.data; }
        if (c_setting === void 0) { c_setting = (0, helpers_1.exchangeUnit)(this.setting); }
        if (typeof value === "number") {
            var n_data = this.build(this.data, c_data);
            var n_setting = this.build(this.setting, c_setting);
            return +(n_data["$1_".concat(n_setting.$from)] / value).toFixed(n_setting.$decimal);
        }
        else {
            throw new Error("NAN is found.");
        }
    };
    MassConvertor.prototype.kyatPae2Gram = function (k, p, c_data, c_setting) {
        if (p === void 0) { p = 0; }
        if (c_data === void 0) { c_data = this.data; }
        if (c_setting === void 0) { c_setting = this.setting; }
        if (typeof (k + p) === "number") {
            var _a = [0, 0], temp = _a[0], gram = _a[1];
            var n_data = this.build(this.data, c_data);
            var n_setting = this.build(this.setting, c_setting);
            temp = k + (p > 0 ? p / 16 : 0);
            gram = temp * n_data.$1_kyat_thar;
            return +gram.toFixed(n_setting.$decimal);
        }
        else {
            throw new Error("NAN is found.");
        }
    };
    MassConvertor.prototype.kyatPaeYway2Gram = function (k, p, y, c_data, c_setting) {
        if (p === void 0) { p = 0; }
        if (y === void 0) { y = 0; }
        if (c_data === void 0) { c_data = this.data; }
        if (c_setting === void 0) { c_setting = this.setting; }
        if (typeof (k + p + y) === "number") {
            var _a = [0, 0], temp = _a[0], gram = _a[1];
            var n_data = this.build(this.data, c_data);
            var n_setting = this.build(this.setting, c_setting);
            temp = k + (p > 0 ? p / 16 : 0) + (y > 0 ? y / 128 : 0);
            gram = temp * n_data.$1_kyat_thar;
            return +gram.toFixed(n_setting.$decimal);
        }
        else {
            throw new Error("NAN is found.");
        }
    };
    MassConvertor.prototype.gram2KyatPae = function (g, c_data, c_setting) {
        if (c_data === void 0) { c_data = this.data; }
        if (c_setting === void 0) { c_setting = this.setting; }
        if (typeof g === "number") {
            var _a = [0, 0, 0], temp = _a[0], kyat = _a[1], pae = _a[2];
            var n_data = this.build(this.data, c_data);
            var n_setting = this.build(this.setting, c_setting);
            temp = g / n_data.$1_kyat_thar;
            if (temp % 1 === 0) {
                return [(kyat = temp), pae];
            }
            else {
                kyat = ~~temp;
                temp = kyat > 0 ? (temp % kyat) * 16 : temp * 16;
                return [kyat, (pae = +temp.toFixed(n_setting.$decimal))];
            }
        }
        else {
            throw new Error("NAN is found.");
        }
    };
    MassConvertor.prototype.gram2KyatPaeYway = function (g, c_data, c_setting) {
        if (c_data === void 0) { c_data = this.data; }
        if (c_setting === void 0) { c_setting = this.setting; }
        if (typeof g === "number") {
            var _a = [0, 0, 0, 0], temp = _a[0], kyat = _a[1], pae = _a[2], yway = _a[3];
            var n_data = this.build(this.data, c_data);
            var n_setting = this.build(this.setting, c_setting);
            temp = g / n_data.$1_kyat_thar;
            if (temp % 1 === 0) {
                return [(kyat = temp), pae, yway];
            }
            else {
                kyat = ~~temp;
                temp = kyat > 0 ? (temp % kyat) * 16 : temp * 16;
                pae = ~~temp;
                temp = pae > 0 ? (temp % pae) * 8 : temp * 8;
                return [kyat, pae, (yway = +temp.toFixed(n_setting.$decimal))];
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
    LengthConvertor.prototype.build = function (origin, modify) {
        return Object.assign(origin, modify);
    };
    LengthConvertor.prototype.metric2Burmese = function (value, c_data, c_setting) {
        if (c_data === void 0) { c_data = this.data; }
        if (c_setting === void 0) { c_setting = this.setting; }
        if (typeof value === "number") {
            var n_data = this.build(this.data, c_data);
            var n_setting = this.build(this.setting, c_setting);
            return +(n_data["$1_".concat(n_setting.$to)] * value).toFixed(n_setting.$decimal);
        }
        else {
            throw new Error("NAN is found.");
        }
    };
    LengthConvertor.prototype.burmese2Metric = function (value, c_data, c_setting) {
        if (c_data === void 0) { c_data = this.data; }
        if (c_setting === void 0) { c_setting = (0, helpers_1.exchangeUnit)(this.setting); }
        if (typeof value === "number") {
            var n_data = this.build(this.data, c_data);
            var n_setting = this.build(this.setting, c_setting);
            return +(n_data["$1_".concat(n_setting.$from)] / value).toFixed(n_setting.$decimal);
        }
        else {
            throw new Error("NAN is found.");
        }
    };
    return LengthConvertor;
}(Convertor));
var VolumeConvertor = /** @class */ (function (_super) {
    __extends(VolumeConvertor, _super);
    function VolumeConvertor(data, setting) {
        return _super.call(this, data, setting) || this;
    }
    VolumeConvertor.prototype.build = function (origin, modify) {
        return Object.assign(origin, modify);
    };
    VolumeConvertor.prototype.metric2Burmese = function (value, c_data, c_setting) {
        if (c_data === void 0) { c_data = this.data; }
        if (c_setting === void 0) { c_setting = this.setting; }
        if (typeof value === "number") {
            var n_data = this.build(this.data, c_data);
            var n_setting = this.build(this.setting, c_setting);
            return +(n_data["$1_".concat(n_setting.$to)] * value).toFixed(n_setting.$decimal);
        }
        else {
            throw new Error("NAN is found.");
        }
    };
    VolumeConvertor.prototype.burmese2Metric = function (value, c_data, c_setting) {
        if (c_data === void 0) { c_data = this.data; }
        if (c_setting === void 0) { c_setting = (0, helpers_1.exchangeUnit)(this.setting); }
        if (typeof value === "number") {
            var n_data = this.build(this.data, c_data);
            var n_setting = this.build(this.setting, c_setting);
            return +(n_data["$1_".concat(n_setting.$from)] / value).toFixed(n_setting.$decimal);
        }
        else {
            throw new Error("NAN is found.");
        }
    };
    return VolumeConvertor;
}(Convertor));
var MoneyConvertor = /** @class */ (function () {
    function MoneyConvertor(data, setting) {
        this.data = data;
        this.setting = setting;
    }
    MoneyConvertor.prototype.build = function (origin, modify) {
        return Object.assign(origin, modify);
    };
    return MoneyConvertor;
}());
var massConvertor = new MassConvertor(constant_1.default.$mass_data, constant_1.default.$mass_setting);
var lengthConvertor = new LengthConvertor(constant_1.default.$length_data, constant_1.default.$length_setting);
var volumeConvertor = new VolumeConvertor(constant_1.default.$volume_data, constant_1.default.$volume_setting);
var moneyConvertor = new MoneyConvertor(constant_1.default.$money_data, constant_1.default.$money_setting);
module.exports = {
    massConvertor: massConvertor,
    lengthConvertor: lengthConvertor,
    volumeConvertor: volumeConvertor,
    moneyConvertor: moneyConvertor,
};
