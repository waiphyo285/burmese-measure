"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BurmeseMeasure = void 0;
var $ = {
    $gram: {
        $1yway_lay: 0.136077706,
        $1yway_gyi: 0.272155412,
        $1pae_thar: 1.020582833,
        $1mu_thar: 2.041165665,
        $1mat_thar: 4.08233133,
        $5mue_thar: 8.16466266,
        $1kyat_thar: 16.32932532,
        $awat_thar: 204.1165665,
        $aseit_thar: 408.233133,
        $50seit_thar: 816.466266,
        $1pate_thar: 1632.932532,
        $100pate_thar: 163293.2532,
        $1000pate_thar: 1632932.532,
    },
};
var BurmeseMeasure = /** @class */ (function () {
    function BurmeseMeasure() {
    }
    BurmeseMeasure.prototype.convertYL2G = function (yl) {
        /*
         * @param {number} yl
         * @return {number}
         */
        if (typeof yl === "number") {
            return yl / $.$gram.$1yway_lay;
        }
        else {
            throw new Error("NAN is found.");
        }
    };
    BurmeseMeasure.prototype.convertYG2G = function (yg) {
        /*
         * @param {number} yg
         * @return {number}
         */
        if (typeof yg === "number") {
            return yg / $.$gram.$1yway_gyi;
        }
        else {
            throw new Error("NAN is found.");
        }
    };
    BurmeseMeasure.prototype.convertMt2G = function (mt) {
        /*
         * @param {number} mt
         * @return {number}
         */
        if (typeof mt === "number") {
            return mt / $.$gram.$1mat_thar;
        }
        else {
            throw new Error("NAN is found.");
        }
    };
    BurmeseMeasure.prototype.convertK2G = function (k) {
        /*
         * @param {number} k
         * @return {number}
         */
        if (typeof k === "number") {
            return k / $.$gram.$1kyat_thar;
        }
        else {
            throw new Error("NAN is found.");
        }
    };
    BurmeseMeasure.prototype.convertP2G = function (p) {
        /*
         * @param {number} p
         * @return {number}
         */
        if (typeof p === "number") {
            return p / $.$gram.$1pate_thar;
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
        if (typeof (k + p + y) === "number") {
            var _a = [0, 0], temp = _a[0], gram = _a[1];
            // convert pae to kyat, yway to kyat and sum of total kyat
            temp = k + (p > 0 ? p / 16 : 0) + (y > 0 ? y / 128 : 0);
            // multiply kyat with 16.6, to get total gram
            gram = temp * $.$gram.$1kyat_thar;
            // return gram
            return gram;
        }
        else {
            throw new Error("NAN is found.");
        }
    };
    BurmeseMeasure.prototype.convertG2YL = function (g) {
        /*
         * @param {number} g
         * @return number
         */
        if (typeof g === "number") {
            return g * $.$gram.$1yway_lay;
        }
        else {
            throw new Error("NAN is found.");
        }
    };
    BurmeseMeasure.prototype.convertG2YG = function (g) {
        /*
         * @param {number} g
         * @return number
         */
        if (typeof g === "number") {
            return g * $.$gram.$1yway_gyi;
        }
        else {
            throw new Error("NAN is found.");
        }
    };
    BurmeseMeasure.prototype.convertG2Mt = function (g) {
        /*
         * @param {number} g
         * @return number
         */
        if (typeof g === "number") {
            return g * $.$gram.$1mat_thar;
        }
        else {
            throw new Error("NAN is found.");
        }
    };
    BurmeseMeasure.prototype.convertG2K = function (g) {
        /*
         * @param {number} g
         * @return number
         */
        if (typeof g === "number") {
            return g * $.$gram.$1kyat_thar;
        }
        else {
            throw new Error("NAN is found.");
        }
    };
    BurmeseMeasure.prototype.convertG2P = function (g) {
        /*
         * @param {number} g
         * @return number
         */
        if (typeof g === "number") {
            console.log(g);
            return g * $.$gram.$1pate_thar;
        }
        else {
            throw new Error("NAN is found.");
        }
    };
    BurmeseMeasure.prototype.convertG2KPY = function (g) {
        /*
         * @param {number} g
         * @return {number[]}
         */
        if (typeof g === "number") {
            var _a = [0, 0, 0, 0], temp = _a[0], kyat = _a[1], pae = _a[2], yway = _a[3];
            temp = g / $.$gram.$1kyat_thar;
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
                // return k,p,y
                return [kyat, pae, (yway = temp)];
            }
        }
        else {
            throw new Error("NAN is found.");
        }
    };
    return BurmeseMeasure;
}());
exports.BurmeseMeasure = BurmeseMeasure;
