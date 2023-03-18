"use strict";
// Standard value
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    // Mass (Burmese <-> Metric Unit (based gram))
    $mass_setting: {
        $decimal: 6,
        $from: "gram",
        $to: "kyat_thar",
    },
    $mass_data: {
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
    // Length (Burmese <-> Metric Unit (based meter))
    $length_setting: {
        $decimal: 6,
        $from: "meter",
        $to: "lan",
    },
    $length_data: {
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
    // Volume (Burmese <-> Metric Unit (based liter))
    $volume_setting: {
        $decimal: 6,
        $from: "liter",
        $to: "pyi",
    },
    $volume_data: {
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
    $money_setting: {
        $decimal: 2,
        $from: "kyat",
        $to: "pya",
    },
    $money_data: {
        $1_pya: 0.01,
        $1_mu: 0.1,
        $1_mat: 0.25,
        $5_mu: 0.5,
    },
};
