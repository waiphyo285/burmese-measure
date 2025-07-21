import {
  Setting,
  ConversionResult,
  FormatOptions,
  MeasurementCategory,
  BatchConversionResult,
} from './types';

/**
 * Exchanges the 'from' and 'to' units in the settings object
 * @param setting - The original settings object
 * @returns A new settings object with swapped units
 */
export const exchangeUnit = (setting: Setting): Setting => {
  const nSetting = { ...setting };
  return {
    ...nSetting,
    from: nSetting.to,
    to: nSetting.from,
  };
};

/**
 * Validates that the input is a number
 * @param value - The value to validate
 * @param errorMessage - Custom error message
 * @throws Error if value is not a number
 */
export const validateNumber = (value: any, errorMessage = 'Invalid input: Not a number'): void => {
  if (typeof value !== 'number' || isNaN(value)) {
    throw new Error(errorMessage);
  }
};

/**
 * Validates that all inputs in an array are numbers
 * @param values - Array of values to validate
 * @throws Error if any value is not a number
 */
export const validateNumberArray = (values: any[]): void => {
  values.forEach((value, index) => {
    validateNumber(value, `Invalid input at position ${index}: Not a number`);
  });
};

/**
 * Formats a number according to the specified options
 * @param value - The number to format
 * @param unit - The unit symbol to append (optional)
 * @param options - Formatting options
 * @returns Formatted string
 */
export const formatNumber = (value: number, unit: string = '', options?: FormatOptions): string => {
  const includeUnit = options?.includeUnit ?? true;
  const localize = options?.localize ?? false;
  const locale = options?.locale ?? 'en-US';

  let formattedValue: string;

  if (localize) {
    formattedValue = value.toLocaleString(locale);
  } else {
    formattedValue = value.toString();
  }

  return includeUnit && unit ? `${formattedValue} ${unit}` : formattedValue;
};

/**
 * Creates a conversion result object
 * @param value - The converted value
 * @param originalValue - The original input value
 * @param fromUnit - Source unit
 * @param toUnit - Target unit
 * @param options - Formatting options
 * @returns A ConversionResult object
 */
export const createConversionResult = (
  value: number,
  originalValue: number,
  fromUnit: string,
  toUnit: string,
  options?: FormatOptions
): ConversionResult => {
  return {
    value,
    originalValue,
    fromUnit,
    toUnit,
    formatted: formatNumber(value, toUnit, options),
  };
};

/**
 * Creates a batch conversion result object
 * @param results - Array of individual conversion results
 * @param fromUnit - Source unit
 * @param toUnit - Target unit
 * @returns A BatchConversionResult object
 */
export const createBatchResult = (
  results: ConversionResult[],
  fromUnit: string,
  toUnit: string
): BatchConversionResult => {
  return {
    results,
    summary: {
      count: results.length,
      fromUnit,
      toUnit,
    },
  };
};

/**
 * Gets the default unit for a measurement category
 * @param category - The measurement category
 * @returns The default unit for the category
 */
export const getDefaultUnit = (category: MeasurementCategory): string => {
  const defaults: Record<MeasurementCategory, string> = {
    mass: 'kyatThar',
    length: 'lan',
    volume: 'pyi',
    money: 'kyat',
  };

  return defaults[category];
};

/**
 * Rounds a number to the specified number of decimal places
 * @param value - The number to round
 * @param decimals - Number of decimal places
 * @returns Rounded number
 */
export const roundToDecimals = (value: number, decimals: number): number => {
  return Number(value.toFixed(decimals));
};
