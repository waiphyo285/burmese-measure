"use strict";
// Standard value
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    // Mass (Burmese <-> Metric Unit (based gram))
    $mass_setting: {
        decimal: 6,
        from: "gram",
        to: "kyat_thar",
    },
    $mass_data: {
        yway_lay: 1.36078e-1,
        yway_gyi: 2.72155e-1,
        pae_thar: 1.02058,
        mu_thar: 2.04117,
        mat_thar: 4.08233,
        kyat_thar: 16.3293,
        pate_thar: 1632.93,
    },
    // Length (Burmese <-> Metric Unit (based meter))
    $length_setting: {
        decimal: 6,
        from: "meter",
        to: "lan",
    },
    $length_data: {
        sanchi: 7.9375e-5,
        hnan: 7.9375e-4,
        muyaw: 4.7625e-3,
        let_thit: 1.905e-2,
        maik: 1.524e-1,
        htwa: 2.286e-1,
        taung: 4.572e-1,
        lan: 1.8288,
        ta: 3.2004,
        out_thaba: 64.008,
        kawtha: 1280.16,
        ga_wout: 5120.64,
        yuzana: 20482.56,
    },
    // Volume (Burmese <-> Metric Unit (based liter))
    $volume_setting: {
        decimal: 6,
        from: "liter",
        to: "pyi",
    },
    $volume_data: {
        la_myu: 7.99118e-2,
        la_myet: 1.59824e-1,
        la_me: 3.19647e-1,
        sa_le: 6.39294e-1,
        hkwet: 1.27859,
        pyi: 2.55718,
        seit: 10.2287,
        hkwe: 20.4574,
        tin: 40.9148,
    },
    // Money (Burmese units)
    $money_setting: {
        decimal: 2,
        from: "kyat",
        to: "pya",
    },
    $money_data: {
        pya: 0.01,
        mu: 0.1,
        mat: 0.25,
    },
};
