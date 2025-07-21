import constants, { MASS, LENGTH, VOLUME, MONEY } from './constant';
import * as helpers from './helpers';
import {
  exchangeUnit,
  validateNumber,
  validateNumberArray,
  createConversionResult,
  createBatchResult,
  roundToDecimals,
} from './helpers';

import {
  BMU,
  Setting,
  Length,
  Mass,
  Money,
  Volume,
  ConversionResult,
  BatchConversionResult,
  MeasurementCategory,
} from './types';

/**
 * Base abstract class for all unit converters
 */
abstract class Convertor<T extends BMU> {
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
   * @returns Conversion result
   */
  public metric2Burmese(value: number): ConversionResult {
    validateNumber(value);

    // For metric to Burmese conversion, we need to divide by the conversion factor
    // since the data values are in metric units per Burmese unit
    const result = roundToDecimals(
      value / (this.data as any)[this.setting.to],
      this.setting.decimal
    );

    return createConversionResult(
      result,
      value,
      this.setting.from,
      this.setting.to,
      this.setting.format
    );
  }

  /**
   * Converts a value from Burmese to metric units
   * @param value - Value to convert
   * @returns Conversion result
   */
  public burmese2Metric(value: number): ConversionResult {
    validateNumber(value);

    const exchangedSetting = exchangeUnit(this.setting);

    // For Burmese to metric conversion, we multiply by the conversion factor
    // since the data values are in metric units per Burmese unit
    const result = roundToDecimals(
      value * (this.data as any)[exchangedSetting.from],
      exchangedSetting.decimal
    );

    return createConversionResult(
      result,
      value,
      exchangedSetting.from,
      exchangedSetting.to,
      exchangedSetting.format
    );
  }

  /**
   * Converts a batch of values from metric to Burmese units
   * @param values - Array of values to convert
   * @returns Batch conversion result
   */
  public batchMetric2Burmese(values: number[]): BatchConversionResult {
    validateNumberArray(values);

    const results = values.map((value) => this.metric2Burmese(value));

    return createBatchResult(results, this.setting.from, this.setting.to);
  }

  /**
   * Converts a batch of values from Burmese to metric units
   * @param values - Array of values to convert
   * @returns Batch conversion result
   */
  public batchBurmese2Metric(values: number[]): BatchConversionResult {
    validateNumberArray(values);

    const exchangedSetting = exchangeUnit(this.setting);
    const results = values.map((value) => this.burmese2Metric(value));

    return createBatchResult(results, exchangedSetting.from, exchangedSetting.to);
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
   * @param newValues - New values to apply
   * @returns This converter instance for chaining
   */
  public updateValues(newValues: Partial<T>): this {
    this.data = this.build(this.data, newValues);
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
   * @returns Conversion result in grams
   */
  public kyatPae2Gram(kyat: number, pae: number = 0): ConversionResult {
    validateNumber(kyat);
    validateNumber(pae);

    const temp = kyat + (pae > 0 ? pae / 16 : 0);
    const gram = roundToDecimals(temp * this.data.kyatThar, this.setting.decimal);

    return createConversionResult(gram, kyat + pae / 16, 'kyat_pae', 'gram', this.setting.format);
  }

  /**
   * Converts kyat, pae, and yway to grams
   * @param kyat - Number of kyat
   * @param pae - Number of pae (1/16 of kyat)
   * @param yway - Number of yway (1/8 of pae, 1/128 of kyat)
   * @returns Conversion result in grams
   */
  public kyatPaeYway2Gram(kyat: number, pae: number = 0, yway: number = 0): ConversionResult {
    validateNumber(kyat);
    validateNumber(pae);
    validateNumber(yway);

    const temp = kyat + (pae > 0 ? pae / 16 : 0) + (yway > 0 ? yway / 128 : 0);
    const gram = roundToDecimals(temp * this.data.kyatThar, this.setting.decimal);

    return createConversionResult(gram, temp, 'kyat_pae_yway', 'gram', this.setting.format);
  }

  /**
   * Converts grams to kyat and pae
   * @param gram - Number of grams
   * @returns Array with [kyat, pae]
   */
  public gram2KyatPae(gram: number): number[] {
    validateNumber(gram);

    const temp = gram / this.data.kyatThar;
    const kyat = Math.floor(temp);
    const pae = roundToDecimals((temp - kyat) * 16, this.setting.decimal);

    return [kyat, pae];
  }

  /**
   * Converts grams to kyat, pae, and yway
   * @param gram - Number of grams
   * @returns Array with [kyat, pae, yway]
   */
  public gram2KyatPaeYway(gram: number): number[] {
    validateNumber(gram);

    const temp = gram / this.data.kyatThar;
    const kyat = Math.floor(temp);
    let remainder = temp - kyat;

    const pae = Math.floor(remainder * 16);
    remainder = remainder * 16 - pae;

    const yway = roundToDecimals(remainder * 8, this.setting.decimal);

    return [kyat, pae, yway];
  }

  /**
   * Formats a gram value as kyat, pae, and yway
   * @param gram - Number of grams
   * @returns Formatted string (e.g., "5 kyat 3 pae 2 yway")
   */
  public formatGramAsKyatPaeYway(gram: number): string {
    const [kyat, pae, yway] = this.gram2KyatPaeYway(gram);
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
   * @returns Conversion result in meters
   */
  public taungLetThit2Meter(taung: number, letThit: number = 0): ConversionResult {
    validateNumber(taung);
    validateNumber(letThit);

    const temp = taung + (letThit > 0 ? letThit / 24 : 0);
    const meter = roundToDecimals(temp * this.data.taung, this.setting.decimal);

    return createConversionResult(meter, temp, 'taung_letthit', 'meter', this.setting.format);
  }

  /**
   * Converts meters to taung and let-thit
   * @param meter - Number of meters
   * @returns Array with [taung, letThit]
   */
  public meter2TaungLetThit(meter: number): number[] {
    validateNumber(meter);

    const temp = meter / this.data.taung;
    const taung = Math.floor(temp);
    const letThit = roundToDecimals((temp - taung) * 24, this.setting.decimal);

    return [taung, letThit];
  }

  /**
   * Formats a meter value as taung and let-thit
   * @param meter - Number of meters
   * @returns Formatted string (e.g., "5 taung 3 let thit")
   */
  public formatMeterAsTaungLetThit(meter: number): string {
    const [taung, letThit] = this.meter2TaungLetThit(meter);
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
   * @returns Conversion result in liters
   */
  public pyiSaLe2Liter(pyi: number, saLe: number = 0): ConversionResult {
    validateNumber(pyi);
    validateNumber(saLe);

    const temp = pyi + (saLe > 0 ? saLe / 4 : 0);
    const liter = roundToDecimals(temp * this.data.pyi, this.setting.decimal);

    return createConversionResult(liter, temp, 'pyi_sale', 'liter', this.setting.format);
  }

  /**
   * Converts liters to pyi and sa-le
   * @param liter - Number of liters
   * @returns Array with [pyi, saLe]
   */
  public liter2PyiSaLe(liter: number): number[] {
    validateNumber(liter);

    const temp = liter / this.data.pyi;
    const pyi = Math.floor(temp);
    const saLe = roundToDecimals((temp - pyi) * 4, this.setting.decimal);

    return [pyi, saLe];
  }

  /**
   * Formats a liter value as pyi and sa-le
   * @param liter - Number of liters
   * @returns Formatted string (e.g., "5 pyi 2 sa le")
   */
  public formatLiterAsPyiSaLe(liter: number): string {
    const [pyi, saLe] = this.liter2PyiSaLe(liter);
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
   * @returns Conversion result in decimal kyat
   */
  public kyatPya2Decimal(kyat: number, pya: number = 0): ConversionResult {
    validateNumber(kyat);
    validateNumber(pya);

    const decimal = roundToDecimals(kyat + pya / 100, this.setting.decimal);

    return createConversionResult(
      decimal,
      kyat + pya / 100,
      'kyat_pya',
      'kyat',
      this.setting.format
    );
  }

  /**
   * Converts decimal kyat to kyat and pya
   * @param decimal - Decimal kyat amount
   * @returns Array with [kyat, pya]
   */
  public decimal2KyatPya(decimal: number): number[] {
    validateNumber(decimal);

    // No need to use settings here, just do the calculation directly
    const kyat = Math.floor(decimal);
    const pya = roundToDecimals((decimal - kyat) * 100, 0);

    return [kyat, pya];
  }

  /**
   * Formats a decimal kyat value as kyat and pya
   * @param decimal - Decimal kyat amount
   * @returns Formatted string (e.g., "5 Ks 50 pya" or "5.50 Ks")
   */
  public formatDecimalAsKyatPya(decimal: number): string {
    validateNumber(decimal);

    const format = this.setting.format || {};

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
  MASS,
  LENGTH,
  VOLUME,
  MONEY,
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
  helpers,
};
