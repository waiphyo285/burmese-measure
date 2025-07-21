import constants, { MASS, LENGTH, VOLUME, MONEY } from './constant';
import {
  exchangeUnit,
  validateNumber,
  validateNumberArray,
  createConversionResult,
  createBatchResult,
  roundToDecimals,
} from './helpers';
import {
  Length,
  Mass,
  Money,
  Setting,
  UData,
  Volume,
  ConversionResult,
  BatchConversionResult,
  MeasurementCategory,
} from './types';

/**
 * Base abstract class for all unit converters
 */
abstract class Convertor<T extends UData> {
  protected data: T;
  protected setting: Setting;
  protected symbols: Record<string, string>;

  /**
   * Creates a new converter instance
   * @param data - Unit conversion data
   * @param setting - Conversion settings
   * @param symbols - Unit symbols for formatting
   */
  constructor(data: T, setting: Setting, symbols: Record<string, string>) {
    this.data = data;
    this.setting = setting;
    this.symbols = symbols;
  }

  /**
   * Merges original data with modified data
   * @param origin - Original data object
   * @param modify - Modified data to merge
   * @returns Merged object
   */
  public build<U>(origin: U, modify: Partial<U>): U {
    return { ...origin, ...modify };
  }

  /**
   * Converts a value from metric to Burmese units
   * @param value - Value to convert
   * @param customData - Optional custom conversion data
   * @param customSetting - Optional custom settings
   * @returns Conversion result
   */
  public metric2Burmese(
    value: number,
    customData?: Partial<T>,
    customSetting?: Partial<Setting>
  ): ConversionResult {
    validateNumber(value);

    const nData = this.build(this.data, customData || {});
    const nSetting = this.build(this.setting, customSetting || {});

    const result = roundToDecimals((nData as any)[nSetting.to] * value, nSetting.decimal);

    return createConversionResult(result, value, nSetting.from, nSetting.to, nSetting.format);
  }

  /**
   * Converts a value from Burmese to metric units
   * @param value - Value to convert
   * @param customData - Optional custom conversion data
   * @param customSetting - Optional custom settings
   * @returns Conversion result
   */
  public burmese2Metric(
    value: number,
    customData?: Partial<T>,
    customSetting?: Partial<Setting>
  ): ConversionResult {
    validateNumber(value);

    const nData = this.build(this.data, customData || {});
    const nSetting = this.build(
      this.setting,
      customSetting
        ? { ...customSetting, ...exchangeUnit(this.setting) }
        : exchangeUnit(this.setting)
    );

    const result = roundToDecimals(value / (nData as any)[nSetting.from], nSetting.decimal);

    return createConversionResult(result, value, nSetting.from, nSetting.to, nSetting.format);
  }

  /**
   * Converts a batch of values from metric to Burmese units
   * @param values - Array of values to convert
   * @param customData - Optional custom conversion data
   * @param customSetting - Optional custom settings
   * @returns Batch conversion result
   */
  public batchMetric2Burmese(
    values: number[],
    customData?: Partial<T>,
    customSetting?: Partial<Setting>
  ): BatchConversionResult {
    validateNumberArray(values);

    const nSetting = this.build(this.setting, customSetting || {});
    const results = values.map((value) => this.metric2Burmese(value, customData, customSetting));

    return createBatchResult(results, nSetting.from, nSetting.to);
  }

  /**
   * Converts a batch of values from Burmese to metric units
   * @param values - Array of values to convert
   * @param customData - Optional custom conversion data
   * @param customSetting - Optional custom settings
   * @returns Batch conversion result
   */
  public batchBurmese2Metric(
    values: number[],
    customData?: Partial<T>,
    customSetting?: Partial<Setting>
  ): BatchConversionResult {
    validateNumberArray(values);

    const nSetting = this.build(
      this.setting,
      customSetting
        ? { ...customSetting, ...exchangeUnit(this.setting) }
        : exchangeUnit(this.setting)
    );
    const results = values.map((value) => this.burmese2Metric(value, customData, customSetting));

    return createBatchResult(results, nSetting.from, nSetting.to);
  }

  /**
   * Gets the symbol for a unit
   * @param unit - Unit name
   * @returns Symbol for the unit
   */
  public getSymbol(unit: string): string {
    return this.symbols[unit] || unit;
  }

  /**
   * Updates the converter settings
   * @param newSettings - New settings to apply
   * @returns This converter instance for chaining
   */
  public updateSettings(newSettings: Partial<Setting>): this {
    this.setting = this.build(this.setting, newSettings);
    return this;
  }

  /**
   * Updates the converter data
   * @param newData - New data to apply
   * @returns This converter instance for chaining
   */
  public updateData(newData: Partial<T>): this {
    this.data = this.build(this.data, newData);
    return this;
  }
}

/**
 * Mass converter for Burmese mass units
 */
class MassConvertor extends Convertor<Mass> {
  /**
   * Creates a new mass converter
   * @param data - Mass conversion data
   * @param setting - Conversion settings
   * @param symbols - Unit symbols
   */
  constructor(data: Mass, setting: Setting, symbols: Record<string, string> = MASS.symbols) {
    super(data, setting, symbols);
  }

  /**
   * Converts kyat and pae to grams
   * @param kyat - Number of kyat
   * @param pae - Number of pae (1/16 of kyat)
   * @param customData - Optional custom conversion data
   * @param customSetting - Optional custom settings
   * @returns Conversion result in grams
   */
  public kyatPae2Gram(
    kyat: number,
    pae: number = 0,
    customData?: Partial<Mass>,
    customSetting?: Partial<Setting>
  ): ConversionResult {
    validateNumber(kyat);
    validateNumber(pae);

    const nData = this.build(this.data, customData || {});
    const nSetting = this.build(this.setting, customSetting || {});

    const temp = kyat + (pae > 0 ? pae / 16 : 0);
    const gram = roundToDecimals(temp * nData.kyatThar, nSetting.decimal);

    return createConversionResult(gram, kyat + pae / 16, 'kyat_pae', 'gram', nSetting.format);
  }

  /**
   * Converts kyat, pae, and yway to grams
   * @param kyat - Number of kyat
   * @param pae - Number of pae (1/16 of kyat)
   * @param yway - Number of yway (1/8 of pae, 1/128 of kyat)
   * @param customData - Optional custom conversion data
   * @param customSetting - Optional custom settings
   * @returns Conversion result in grams
   */
  public kyatPaeYway2Gram(
    kyat: number,
    pae: number = 0,
    yway: number = 0,
    customData?: Partial<Mass>,
    customSetting?: Partial<Setting>
  ): ConversionResult {
    validateNumber(kyat);
    validateNumber(pae);
    validateNumber(yway);

    const nData = this.build(this.data, customData || {});
    const nSetting = this.build(this.setting, customSetting || {});

    const temp = kyat + (pae > 0 ? pae / 16 : 0) + (yway > 0 ? yway / 128 : 0);
    const gram = roundToDecimals(temp * nData.kyatThar, nSetting.decimal);

    return createConversionResult(gram, temp, 'kyat_pae_yway', 'gram', nSetting.format);
  }

  /**
   * Converts grams to kyat and pae
   * @param gram - Number of grams
   * @param customData - Optional custom conversion data
   * @param customSetting - Optional custom settings
   * @returns Array with [kyat, pae]
   */
  public gram2KyatPae(
    gram: number,
    customData?: Partial<Mass>,
    customSetting?: Partial<Setting>
  ): number[] {
    validateNumber(gram);

    const nData = this.build(this.data, customData || {});
    const nSetting = this.build(this.setting, customSetting || {});

    let temp = gram / nData.kyatThar;
    let kyat = 0;
    let pae = 0;

    if (temp % 1 === 0) {
      kyat = temp;
    } else {
      kyat = Math.floor(temp);
      temp = kyat > 0 ? (temp % kyat) * 16 : temp * 16;
      pae = roundToDecimals(temp, nSetting.decimal);
    }

    return [kyat, pae];
  }

  /**
   * Converts grams to kyat, pae, and yway
   * @param gram - Number of grams
   * @param customData - Optional custom conversion data
   * @param customSetting - Optional custom settings
   * @returns Array with [kyat, pae, yway]
   */
  public gram2KyatPaeYway(
    gram: number,
    customData?: Partial<Mass>,
    customSetting?: Partial<Setting>
  ): number[] {
    validateNumber(gram);

    const nData = this.build(this.data, customData || {});
    const nSetting = this.build(this.setting, customSetting || {});

    let temp = gram / nData.kyatThar;
    let kyat = 0;
    let pae = 0;
    let yway = 0;

    if (temp % 1 === 0) {
      kyat = temp;
    } else {
      kyat = Math.floor(temp);
      temp = kyat > 0 ? (temp % kyat) * 16 : temp * 16;
      pae = Math.floor(temp);
      temp = pae > 0 ? (temp % pae) * 8 : temp * 8;
      yway = roundToDecimals(temp, nSetting.decimal);
    }

    return [kyat, pae, yway];
  }

  /**
   * Formats a gram value as kyat, pae, and yway
   * @param gram - Number of grams
   * @param customData - Optional custom conversion data
   * @param customSetting - Optional custom settings
   * @returns Formatted string (e.g., "5 kyat 3 pae 2 yway")
   */
  public formatGramAsKyatPaeYway(
    gram: number,
    customData?: Partial<Mass>,
    customSetting?: Partial<Setting>
  ): string {
    const [kyat, pae, yway] = this.gram2KyatPaeYway(gram, customData, customSetting);
    let result = '';

    if (kyat > 0) {
      result += `${kyat} ${this.getSymbol('kyatThar')}`;
    }

    if (pae > 0) {
      result += result
        ? ` ${pae} ${this.getSymbol('paeThar')}`
        : `${pae} ${this.getSymbol('paeThar')}`;
    }

    if (yway > 0) {
      result += result
        ? ` ${yway} ${this.getSymbol('ywayGyi')}`
        : `${yway} ${this.getSymbol('ywayGyi')}`;
    }

    return result || '0';
  }
}

/**
 * Length converter for Burmese length units
 */
class LengthConvertor extends Convertor<Length> {
  /**
   * Creates a new length converter
   * @param data - Length conversion data
   * @param setting - Conversion settings
   * @param symbols - Unit symbols
   */
  constructor(data: Length, setting: Setting, symbols: Record<string, string> = LENGTH.symbols) {
    super(data, setting, symbols);
  }

  /**
   * Converts taung and let-thit to meters
   * @param taung - Number of taung
   * @param letThit - Number of let-thit (1/24 of taung)
   * @param customData - Optional custom conversion data
   * @param customSetting - Optional custom settings
   * @returns Conversion result in meters
   */
  public taungLetThit2Meter(
    taung: number,
    letThit: number = 0,
    customData?: Partial<Length>,
    customSetting?: Partial<Setting>
  ): ConversionResult {
    validateNumber(taung);
    validateNumber(letThit);

    const nData = this.build(this.data, customData || {});
    const nSetting = this.build(this.setting, customSetting || {});

    const temp = taung + (letThit > 0 ? letThit / 24 : 0);
    const meter = roundToDecimals(temp * nData.taung, nSetting.decimal);

    return createConversionResult(meter, temp, 'taung_letthit', 'meter', nSetting.format);
  }

  /**
   * Converts meters to taung and let-thit
   * @param meter - Number of meters
   * @param customData - Optional custom conversion data
   * @param customSetting - Optional custom settings
   * @returns Array with [taung, letThit]
   */
  public meter2TaungLetThit(
    meter: number,
    customData?: Partial<Length>,
    customSetting?: Partial<Setting>
  ): number[] {
    validateNumber(meter);

    const nData = this.build(this.data, customData || {});
    const nSetting = this.build(this.setting, customSetting || {});

    let temp = meter / nData.taung;
    let taung = 0;
    let letThit = 0;

    if (temp % 1 === 0) {
      taung = temp;
    } else {
      taung = Math.floor(temp);
      temp = taung > 0 ? (temp % taung) * 24 : temp * 24;
      letThit = roundToDecimals(temp, nSetting.decimal);
    }

    return [taung, letThit];
  }

  /**
   * Formats a meter value as taung and let-thit
   * @param meter - Number of meters
   * @param customData - Optional custom conversion data
   * @param customSetting - Optional custom settings
   * @returns Formatted string (e.g., "5 taung 3 let thit")
   */
  public formatMeterAsTaungLetThit(
    meter: number,
    customData?: Partial<Length>,
    customSetting?: Partial<Setting>
  ): string {
    const [taung, letThit] = this.meter2TaungLetThit(meter, customData, customSetting);
    let result = '';

    if (taung > 0) {
      result += `${taung} ${this.getSymbol('taung')}`;
    }

    if (letThit > 0) {
      result += result
        ? ` ${letThit} ${this.getSymbol('letThit')}`
        : `${letThit} ${this.getSymbol('letThit')}`;
    }

    return result || '0';
  }
}

/**
 * Volume converter for Burmese volume units
 */
class VolumeConvertor extends Convertor<Volume> {
  /**
   * Creates a new volume converter
   * @param data - Volume conversion data
   * @param setting - Conversion settings
   * @param symbols - Unit symbols
   */
  constructor(data: Volume, setting: Setting, symbols: Record<string, string> = VOLUME.symbols) {
    super(data, setting, symbols);
  }

  /**
   * Converts pyi and sa-le to liters
   * @param pyi - Number of pyi
   * @param saLe - Number of sa-le (1/4 of pyi)
   * @param customData - Optional custom conversion data
   * @param customSetting - Optional custom settings
   * @returns Conversion result in liters
   */
  public pyiSaLe2Liter(
    pyi: number,
    saLe: number = 0,
    customData?: Partial<Volume>,
    customSetting?: Partial<Setting>
  ): ConversionResult {
    validateNumber(pyi);
    validateNumber(saLe);

    const nData = this.build(this.data, customData || {});
    const nSetting = this.build(this.setting, customSetting || {});

    const temp = pyi + (saLe > 0 ? saLe / 4 : 0);
    const liter = roundToDecimals(temp * nData.pyi, nSetting.decimal);

    return createConversionResult(liter, temp, 'pyi_sale', 'liter', nSetting.format);
  }

  /**
   * Converts liters to pyi and sa-le
   * @param liter - Number of liters
   * @param customData - Optional custom conversion data
   * @param customSetting - Optional custom settings
   * @returns Array with [pyi, saLe]
   */
  public liter2PyiSaLe(
    liter: number,
    customData?: Partial<Volume>,
    customSetting?: Partial<Setting>
  ): number[] {
    validateNumber(liter);

    const nData = this.build(this.data, customData || {});
    const nSetting = this.build(this.setting, customSetting || {});

    let temp = liter / nData.pyi;
    let pyi = 0;
    let saLe = 0;

    if (temp % 1 === 0) {
      pyi = temp;
    } else {
      pyi = Math.floor(temp);
      temp = pyi > 0 ? (temp % pyi) * 4 : temp * 4;
      saLe = roundToDecimals(temp, nSetting.decimal);
    }

    return [pyi, saLe];
  }

  /**
   * Formats a liter value as pyi and sa-le
   * @param liter - Number of liters
   * @param customData - Optional custom conversion data
   * @param customSetting - Optional custom settings
   * @returns Formatted string (e.g., "5 pyi 2 sa le")
   */
  public formatLiterAsPyiSaLe(
    liter: number,
    customData?: Partial<Volume>,
    customSetting?: Partial<Setting>
  ): string {
    const [pyi, saLe] = this.liter2PyiSaLe(liter, customData, customSetting);
    let result = '';

    if (pyi > 0) {
      result += `${pyi} ${this.getSymbol('pyi')}`;
    }

    if (saLe > 0) {
      result += result ? ` ${saLe} ${this.getSymbol('saLe')}` : `${saLe} ${this.getSymbol('saLe')}`;
    }

    return result || '0';
  }
}

/**
 * Money converter for Burmese currency units
 */
class MoneyConvertor extends Convertor<Money> {
  /**
   * Creates a new money converter
   * @param data - Money conversion data
   * @param setting - Conversion settings
   * @param symbols - Unit symbols
   */
  constructor(data: Money, setting: Setting, symbols: Record<string, string> = MONEY.symbols) {
    super(data, setting, symbols);
  }

  /**
   * Converts kyat and pya to decimal kyat
   * @param kyat - Number of kyat
   * @param pya - Number of pya (1/100 of kyat)
   * @param _customData - Optional custom conversion data (unused)
   * @param customSetting - Optional custom settings
   * @returns Conversion result in decimal kyat
   */
  public kyatPya2Decimal(
    kyat: number,
    pya: number = 0,
    _customData?: Partial<Money>,
    customSetting?: Partial<Setting>
  ): ConversionResult {
    validateNumber(kyat);
    validateNumber(pya);

    const nSetting = this.build(this.setting, customSetting || {});

    const decimal = roundToDecimals(kyat + pya / 100, nSetting.decimal);

    return createConversionResult(decimal, kyat + pya / 100, 'kyat_pya', 'kyat', nSetting.format);
  }

  /**
   * Converts decimal kyat to kyat and pya
   * @param decimal - Decimal kyat amount
   * @param _customData - Optional custom conversion data (unused)
   * @param _customSetting - Optional custom settings (unused)
   * @returns Array with [kyat, pya]
   */
  public decimal2KyatPya(
    decimal: number,
    _customData?: Partial<Money>,
    _customSetting?: Partial<Setting>
  ): number[] {
    validateNumber(decimal);

    // No need to use settings here, just do the calculation directly
    const kyat = Math.floor(decimal);
    const pya = roundToDecimals((decimal - kyat) * 100, 0);

    return [kyat, pya];
  }

  /**
   * Formats a decimal kyat value as kyat and pya
   * @param decimal - Decimal kyat amount
   * @param _customData - Optional custom conversion data (unused)
   * @param customSetting - Optional custom settings
   * @returns Formatted string (e.g., "5 Ks 50 pya" or "5.50 Ks")
   */
  public formatDecimalAsKyatPya(
    decimal: number,
    _customData?: Partial<Money>,
    customSetting?: Partial<Setting>
  ): string {
    validateNumber(decimal);

    const nSetting = this.build(this.setting, customSetting || {});
    const format = nSetting.format || {};

    if (format.localize) {
      return new Intl.NumberFormat(format.locale || 'my-MM', {
        style: 'currency',
        currency: 'MMK',
        currencyDisplay: 'symbol',
      }).format(decimal);
    }

    const [kyat, pya] = this.decimal2KyatPya(decimal);

    if (pya === 0) {
      return `${kyat} ${this.getSymbol('kyat')}`;
    }

    return `${kyat} ${this.getSymbol('kyat')} ${pya} ${this.getSymbol('pya')}`;
  }
}

// Create instances of each converter
const massConvertor = new MassConvertor(constants.$massData, constants.$massSettings, MASS.symbols);

const lengthConvertor = new LengthConvertor(
  constants.$lengthData,
  constants.$lengthSettings,
  LENGTH.symbols
);

const volumeConvertor = new VolumeConvertor(
  constants.$volumeData,
  constants.$volumeSettings,
  VOLUME.symbols
);

const moneyConvertor = new MoneyConvertor(
  constants.$moneyData,
  constants.$moneySettings,
  MONEY.symbols
);

/**
 * Factory function to create a converter of the specified type
 * @param category - Measurement category
 * @returns Appropriate converter instance
 */
const createConverter = (category: MeasurementCategory): Convertor<any> => {
  switch (category) {
    case 'mass':
      return massConvertor;
    case 'length':
      return lengthConvertor;
    case 'volume':
      return volumeConvertor;
    case 'money':
      return moneyConvertor;
    default:
      throw new Error(`Unknown measurement category: ${category}`);
  }
};

// Export all converters and utilities
export {
  massConvertor,
  lengthConvertor,
  volumeConvertor,
  moneyConvertor,
  createConverter,
  Convertor,
  MassConvertor,
  LengthConvertor,
  VolumeConvertor,
  MoneyConvertor,
  MASS,
  LENGTH,
  VOLUME,
  MONEY,
};
