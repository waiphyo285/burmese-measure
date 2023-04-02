"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.exchangeUnit = void 0;
var exchangeUnit = function (setting) {
    var n_setting = Object.assign({}, setting);
    return __assign(__assign({}, n_setting), { from: n_setting.to, to: n_setting.from });
};
exports.exchangeUnit = exchangeUnit;
