export declare type Setting = {
    $decimal: number;
    $from: string;
    $to: string;
};
export declare type Length = {
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
};
export declare type Mass = {
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
};
export declare type Volume = {
    $1_la_myu: number;
    $1_la_myet: number;
    $1_la_me: number;
    $1_sa_le: number;
    $1_hkwet: number;
    $1_pyi: number;
    $1_seit: number;
    $1_hkwe: number;
    $1_tin: number;
};
export declare type Money = {
    $1_pya: number;
    $1_mu: number;
    $1_mat: number;
    $5_mu: number;
};
export declare type UData = Mass | Volume | Money | Length;
