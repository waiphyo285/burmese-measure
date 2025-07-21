/**
 * Configuration settings for unit conversion
 */
export interface Setting {
  /** Number of decimal places for rounding */
  decimal: number;
  /** Source unit for conversion */
  from: string;
  /** Target unit for conversion */
  to: string;
  /** Optional formatting options */
  format?: FormatOptions;
}

/**
 * Options for formatting conversion results
 */
export interface FormatOptions {
  /** Whether to include unit symbol in output */
  includeUnit?: boolean;
  /** Whether to use localized number format */
  localize?: boolean;
  /** Locale to use for number formatting */
  locale?: string;
}

/**
 * Burmese length units and their metric equivalents
 */
export interface Length {
  /** Sanchi (smallest Burmese length unit) */
  sanchi: number;
  /** Hnan unit */
  hnan: number;
  /** Muyaw unit */
  muyaw: number;
  /** Let-thit unit */
  letThit: number;
  /** Maik unit */
  maik: number;
  /** Htwa unit */
  htwa: number;
  /** Taung unit */
  taung: number;
  /** Lan unit (default) */
  lan: number;
  /** Ta unit */
  ta: number;
  /** Out-thaba unit */
  outThaba: number;
  /** Kawtha unit */
  kawtha: number;
  /** Ga-wout unit */
  gaWout: number;
  /** Yuzana unit (largest Burmese length unit) */
  yuzana: number;
  /** Meter (SI unit) */
  meter?: number;
}

/**
 * Burmese mass units and their metric equivalents
 */
export interface Mass {
  /** Yway-lay (smallest Burmese mass unit) */
  ywayLay: number;
  /** Yway-gyi unit */
  ywayGyi: number;
  /** Pae-thar unit */
  paeThar: number;
  /** Mu-thar unit */
  muThar: number;
  /** Mat-thar unit */
  matThar: number;
  /** Kyat-thar unit (default) */
  kyatThar: number;
  /** Pate-thar unit (largest Burmese mass unit) */
  pateThar: number;
  /** Gram (SI unit) */
  gram?: number;
}

/**
 * Burmese volume units and their metric equivalents
 */
export interface Volume {
  /** La-myu (smallest Burmese volume unit) */
  laMyu: number;
  /** La-myet unit */
  laMyet: number;
  /** La-me unit */
  laMe: number;
  /** Sa-le unit */
  saLe: number;
  /** Hkwet unit */
  hkwet: number;
  /** Pyi unit (default) */
  pyi: number;
  /** Seit unit */
  seit: number;
  /** Hkwe unit */
  hkwe: number;
  /** Tin unit (largest Burmese volume unit) */
  tin: number;
  /** Liter (SI unit) */
  liter?: number;
}

/**
 * Burmese currency units
 */
export interface Money {
  /** Pya (1/100 of Kyat) */
  pya: number;
  /** Mu (1/10 of Kyat) */
  mu: number;
  /** Mat (1/4 of Kyat) */
  mat: number;
  /** Kyat (base unit) */
  kyat?: number;
}

/**
 * Union type for all unit data types
 */
export type UData = Mass | Volume | Money | Length;

/**
 * Result of a conversion operation with formatted output
 */
export interface ConversionResult {
  /** Numeric result of conversion */
  value: number;
  /** Original input value */
  originalValue: number;
  /** Source unit */
  fromUnit: string;
  /** Target unit */
  toUnit: string;
  /** Formatted string representation */
  formatted: string;
}

/**
 * Batch conversion result
 */
export interface BatchConversionResult {
  /** Array of individual conversion results */
  results: ConversionResult[];
  /** Summary information */
  summary: {
    count: number;
    fromUnit: string;
    toUnit: string;
  };
}

/**
 * Supported measurement categories
 */
export type MeasurementCategory = 'mass' | 'length' | 'volume' | 'money';
