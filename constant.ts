/**
 * Standard conversion values and settings for Burmese measurement units
 */

/**
 * Mass conversion settings and data
 */
export const MASS = {
  // Default settings for mass conversion
  settings: {
    decimal: 6,
    from: 'gram',
    to: 'kyatThar',
    format: {
      includeUnit: true,
      localize: false,
      locale: 'en-US',
    },
  },

  // Conversion factors for mass units (in grams)
  data: {
    // Burmese units
    ywayLay: 1.36078e-1, // Smallest Burmese mass unit
    ywayGyi: 2.72155e-1,
    paeThar: 1.02058,
    muThar: 2.04117,
    matThar: 4.08233,
    kyatThar: 16.3293, // Default Burmese mass unit
    pateThar: 1632.93, // Largest Burmese mass unit

    // Metric units
    milligram: 0.001,
    gram: 1, // Base SI unit for mass conversion
    kilogram: 1000,
  },

  // Unit symbols for formatting
  symbols: {
    ywayLay: 'yway lay',
    ywayGyi: 'yway gyi',
    paeThar: 'pae',
    muThar: 'mu',
    matThar: 'mat',
    kyatThar: 'kyat',
    pateThar: 'pate',
    milligram: 'mg',
    gram: 'g',
    kilogram: 'kg',
  },
};

/**
 * Length conversion settings and data
 */
export const LENGTH = {
  // Default settings for length conversion
  settings: {
    decimal: 6,
    from: 'meter',
    to: 'lan',
    format: {
      includeUnit: true,
      localize: false,
      locale: 'en-US',
    },
  },

  // Conversion factors for length units (in meters)
  data: {
    // Burmese units
    sanchi: 7.9375e-5, // Smallest Burmese length unit
    hnan: 7.9375e-4,
    muyaw: 4.7625e-3,
    letThit: 1.905e-2,
    maik: 1.524e-1,
    htwa: 2.286e-1,
    taung: 4.572e-1,
    lan: 1.8288, // Default Burmese length unit
    ta: 3.2004,
    outThaba: 64.008,
    kawtha: 1280.16,
    gaWout: 5120.64,
    yuzana: 20482.56, // Largest Burmese length unit

    // Metric units
    millimeter: 0.001,
    centimeter: 0.01,
    meter: 1, // Base SI unit for length conversion
    kilometer: 1000,
  },

  // Unit symbols for formatting
  symbols: {
    sanchi: 'sanchi',
    hnan: 'hnan',
    muyaw: 'muyaw',
    letThit: 'let thit',
    maik: 'maik',
    htwa: 'htwa',
    taung: 'taung',
    lan: 'lan',
    ta: 'ta',
    outThaba: 'out thaba',
    kawtha: 'kawtha',
    gaWout: 'ga wout',
    yuzana: 'yuzana',
    millimeter: 'mm',
    centimeter: 'cm',
    meter: 'm',
    kilometer: 'km',
  },
};

/**
 * Volume conversion settings and data
 */
export const VOLUME = {
  // Default settings for volume conversion
  settings: {
    decimal: 6,
    from: 'liter',
    to: 'pyi',
    format: {
      includeUnit: true,
      localize: false,
      locale: 'en-US',
    },
  },

  // Conversion factors for volume units (in liters)
  data: {
    // Burmese units
    laMyu: 7.99118e-2, // Smallest Burmese volume unit
    laMyet: 1.59824e-1,
    laMe: 3.19647e-1,
    saLe: 6.39294e-1,
    hkwet: 1.27859,
    pyi: 2.55718, // Default Burmese volume unit
    seit: 10.2287,
    hkwe: 20.4574,
    tin: 40.9148, // Largest Burmese volume unit

    // Metric units
    milliliter: 0.001,
    liter: 1, // Base SI unit for volume conversion
    kiloliter: 1000,
  },

  // Unit symbols for formatting
  symbols: {
    laMyu: 'la myu',
    laMyet: 'la myet',
    laMe: 'la me',
    saLe: 'sa le',
    hkwet: 'hkwet',
    pyi: 'pyi',
    seit: 'seit',
    hkwe: 'hkwe',
    tin: 'tin',
    milliliter: 'ml',
    liter: 'L',
    kiloliter: 'kL',
  },
};

/**
 * Money conversion settings and data
 */
export const MONEY = {
  // Default settings for money conversion
  settings: {
    decimal: 2,
    from: 'kyat',
    to: 'pya',
    format: {
      includeUnit: true,
      localize: true,
      locale: 'my-MM',
    },
  },

  // Conversion factors for money units (in kyat)
  data: {
    // Burmese units
    pya: 0.01, // 1/100 of Kyat
    mu: 0.1, // 1/10 of Kyat
    mat: 0.25, // 1/4 of Kyat
    kyat: 1, // Base Burmese currency unit
  },

  // Unit symbols for formatting
  symbols: {
    pya: 'pya',
    mu: 'mu',
    mat: 'mat',
    kyat: 'Ks',
  },
};

// Export all constants
export default {
  $massData: MASS.data,
  $massSettings: MASS.settings,
  $lengthData: LENGTH.data,
  $lengthSettings: LENGTH.settings,
  $volumeData: VOLUME.data,
  $volumeSettings: VOLUME.settings,
  $moneyData: MONEY.data,
  $moneySettings: MONEY.settings,
};
