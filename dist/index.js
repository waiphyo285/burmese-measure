"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BurmeseMeasure = void 0;
var BurmeseMeasure = /** @class */ (function () {
    function BurmeseMeasure() {
    }
    BurmeseMeasure.prototype.convertG2KPY = function (g) {
        /*
         * @param {number} g
         * @return {number[]}
         */
        var GramPerKyat = 16.6;
        if (typeof g === "number") {
            var _a = [0, 0, 0, 0], temp = _a[0], kyat = _a[1], pae = _a[2], yway = _a[3];
            temp = g / GramPerKyat;
            // check if integer
            if (temp % 1 === 0) {
                // return k,p,y
                return [(kyat = temp), pae, yway];
            }
            else {
                kyat = ~~temp; // get kyat value
                temp = kyat > 0 ? (temp % kyat) * 16 : temp * 16;
                pae = ~~temp; // get pae value
                temp = pae > 0 ? (temp % pae) * 8 : temp * 8;
                yway = +temp.toFixed(3); // get yway value
                // return k,p,y
                return [kyat, pae, yway];
            }
        }
        else {
            throw new Error("NAN is found.");
        }
    };
    BurmeseMeasure.prototype.convertKPY2G = function (k, p, y) {
        if (p === void 0) { p = 0; }
        if (y === void 0) { y = 0; }
        /*
         * @param {number} k
         * @param {number} p
         * @param {number} y
         * @return {number} g
         */
        var GramPerKyat = 16.6;
        if (typeof (k + p + y) === "number") {
            var _a = [0, 0, 0], temp = _a[0], gram = _a[1];
            // convert pae to kyat, yway to kyat and sum of total kyat
            temp = k + (p > 0 ? p / 16 : 0) + (y > 0 ? y / 128 : 0);
            // multiply kyat with 16.6, to get total gram
            gram = +(temp * GramPerKyat).toFixed(3);
            // return gram
            return gram;
        }
        else {
            throw new Error("NAN is found.");
        }
    };
    return BurmeseMeasure;
}());
exports.BurmeseMeasure = BurmeseMeasure;
