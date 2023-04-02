export type Setting = {
  decimal: number;
  from: string;
  to: string;
};

export type Length = {
  sanchi: number;
  hnan: number;
  muyaw: number;
  let_thit: number;
  maik: number;
  htwa: number;
  taung: number;
  lan: number;
  ta: number;
  out_thaba: number;
  kawtha: number;
  ga_wout: number;
  yuzana: number;
};

export type Mass = {
  yway_lay: number;
  yway_gyi: number;
  pae_thar: number;
  mu_thar: number;
  mat_thar: number;
  kyat_thar: number;
  pate_thar: number;
};

export type Volume = {
  la_myu: number;
  la_myet: number;
  la_me: number;
  sa_le: number;
  hkwet: number;
  pyi: number;
  seit: number;
  hkwe: number;
  tin: number;
};

export type Money = {
  pya: number;
  mu: number;
  mat: number;
};

export type UData = Mass | Volume | Money | Length;
