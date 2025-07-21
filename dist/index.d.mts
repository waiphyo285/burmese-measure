/**
 * Standard conversion values and settings for Burmese measurement units
 */
/**
 * Mass conversion settings and data
 */
declare const MASS: {
    settings: {
        decimal: number;
        from: string;
        to: string;
        format: {
            includeUnit: boolean;
            localize: boolean;
            locale: string;
        };
    };
    data: {
        ywayLay: number;
        ywayGyi: number;
        paeThar: number;
        muThar: number;
        matThar: number;
        kyatThar: number;
        pateThar: number;
        milligram: number;
        gram: number;
        kilogram: number;
    };
    symbols: {
        ywayLay: string;
        ywayGyi: string;
        paeThar: string;
        muThar: string;
        matThar: string;
        kyatThar: string;
        pateThar: string;
        milligram: string;
        gram: string;
        kilogram: string;
    };
};
/**
 * Length conversion settings and data
 */
declare const LENGTH: {
    settings: {
        decimal: number;
        from: string;
        to: string;
        format: {
            includeUnit: boolean;
            localize: boolean;
            locale: string;
        };
    };
    data: {
        sanchi: number;
        hnan: number;
        muyaw: number;
        letThit: number;
        maik: number;
        htwa: number;
        taung: number;
        lan: number;
        ta: number;
        outThaba: number;
        kawtha: number;
        gaWout: number;
        yuzana: number;
        millimeter: number;
        centimeter: number;
        meter: number;
        kilometer: number;
    };
    symbols: {
        sanchi: string;
        hnan: string;
        muyaw: string;
        letThit: string;
        maik: string;
        htwa: string;
        taung: string;
        lan: string;
        ta: string;
        outThaba: string;
        kawtha: string;
        gaWout: string;
        yuzana: string;
        millimeter: string;
        centimeter: string;
        meter: string;
        kilometer: string;
    };
};
/**
 * Volume conversion settings and data
 */
declare const VOLUME: {
    settings: {
        decimal: number;
        from: string;
        to: string;
        format: {
            includeUnit: boolean;
            localize: boolean;
            locale: string;
        };
    };
    data: {
        laMyu: number;
        laMyet: number;
        laMe: number;
        saLe: number;
        hkwet: number;
        pyi: number;
        seit: number;
        hkwe: number;
        tin: number;
        milliliter: number;
        liter: number;
        kiloliter: number;
    };
    symbols: {
        laMyu: string;
        laMyet: string;
        laMe: string;
        saLe: string;
        hkwet: string;
        pyi: string;
        seit: string;
        hkwe: string;
        tin: string;
        milliliter: string;
        liter: string;
        kiloliter: string;
    };
};
/**
 * Money conversion settings and data
 */
declare const MONEY: {
    settings: {
        decimal: number;
        from: string;
        to: string;
        format: {
            includeUnit: boolean;
            localize: boolean;
            locale: string;
        };
    };
    data: {
        pya: number;
        mu: number;
        mat: number;
        kyat: number;
    };
    symbols: {
        pya: string;
        mu: string;
        mat: string;
        kyat: string;
    };
};

/**
 * Configuration settings for unit conversion
 */
interface Setting {
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
interface FormatOptions {
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
interface Length {
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
interface Mass {
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
interface Volume {
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
interface Money {
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
type UData = Mass | Volume | Money | Length;
/**
 * Result of a conversion operation with formatted output
 */
interface ConversionResult {
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
interface BatchConversionResult {
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
type MeasurementCategory = 'mass' | 'length' | 'volume' | 'money';

/**
 * Base abstract class for all unit converters
 */
declare abstract class Convertor<T extends UData> {
    protected data: T;
    protected setting: Setting;
    protected symbols: Record<string, string>;
    /**
     * Creates a new converter instance
     * @param data - Unit conversion data
     * @param setting - Conversion settings
     * @param symbols - Unit symbols for formatting
     */
    constructor(data: T, setting: Setting, symbols: Record<string, string>);
    /**
     * Merges original data with modified data
     * @param origin - Original data object
     * @param modify - Modified data to merge
     * @returns Merged object
     */
    build<U>(origin: U, modify: Partial<U>): U;
    /**
     * Converts a value from metric to Burmese units
     * @param value - Value to convert
     * @param customData - Optional custom conversion data
     * @param customSetting - Optional custom settings
     * @returns Conversion result
     */
    metric2Burmese(value: number, customData?: Partial<T>, customSetting?: Partial<Setting>): ConversionResult;
    /**
     * Converts a value from Burmese to metric units
     * @param value - Value to convert
     * @param customData - Optional custom conversion data
     * @param customSetting - Optional custom settings
     * @returns Conversion result
     */
    burmese2Metric(value: number, customData?: Partial<T>, customSetting?: Partial<Setting>): ConversionResult;
    /**
     * Converts a batch of values from metric to Burmese units
     * @param values - Array of values to convert
     * @param customData - Optional custom conversion data
     * @param customSetting - Optional custom settings
     * @returns Batch conversion result
     */
    batchMetric2Burmese(values: number[], customData?: Partial<T>, customSetting?: Partial<Setting>): BatchConversionResult;
    /**
     * Converts a batch of values from Burmese to metric units
     * @param values - Array of values to convert
     * @param customData - Optional custom conversion data
     * @param customSetting - Optional custom settings
     * @returns Batch conversion result
     */
    batchBurmese2Metric(values: number[], customData?: Partial<T>, customSetting?: Partial<Setting>): BatchConversionResult;
    /**
     * Gets the symbol for a unit
     * @param unit - Unit name
     * @returns Symbol for the unit
     */
    getSymbol(unit: string): string;
    /**
     * Updates the converter settings
     * @param newSettings - New settings to apply
     * @returns This converter instance for chaining
     */
    updateSettings(newSettings: Partial<Setting>): this;
    /**
     * Updates the converter data
     * @param newData - New data to apply
     * @returns This converter instance for chaining
     */
    updateData(newData: Partial<T>): this;
}
/**
 * Mass converter for Burmese mass units
 */
declare class MassConvertor extends Convertor<Mass> {
    /**
     * Creates a new mass converter
     * @param data - Mass conversion data
     * @param setting - Conversion settings
     * @param symbols - Unit symbols
     */
    constructor(data: Mass, setting: Setting, symbols?: Record<string, string>);
    /**
     * Converts kyat and pae to grams
     * @param kyat - Number of kyat
     * @param pae - Number of pae (1/16 of kyat)
     * @param customData - Optional custom conversion data
     * @param customSetting - Optional custom settings
     * @returns Conversion result in grams
     */
    kyatPae2Gram(kyat: number, pae?: number, customData?: Partial<Mass>, customSetting?: Partial<Setting>): ConversionResult;
    /**
     * Converts kyat, pae, and yway to grams
     * @param kyat - Number of kyat
     * @param pae - Number of pae (1/16 of kyat)
     * @param yway - Number of yway (1/8 of pae, 1/128 of kyat)
     * @param customData - Optional custom conversion data
     * @param customSetting - Optional custom settings
     * @returns Conversion result in grams
     */
    kyatPaeYway2Gram(kyat: number, pae?: number, yway?: number, customData?: Partial<Mass>, customSetting?: Partial<Setting>): ConversionResult;
    /**
     * Converts grams to kyat and pae
     * @param gram - Number of grams
     * @param customData - Optional custom conversion data
     * @param customSetting - Optional custom settings
     * @returns Array with [kyat, pae]
     */
    gram2KyatPae(gram: number, customData?: Partial<Mass>, customSetting?: Partial<Setting>): number[];
    /**
     * Converts grams to kyat, pae, and yway
     * @param gram - Number of grams
     * @param customData - Optional custom conversion data
     * @param customSetting - Optional custom settings
     * @returns Array with [kyat, pae, yway]
     */
    gram2KyatPaeYway(gram: number, customData?: Partial<Mass>, customSetting?: Partial<Setting>): number[];
    /**
     * Formats a gram value as kyat, pae, and yway
     * @param gram - Number of grams
     * @param customData - Optional custom conversion data
     * @param customSetting - Optional custom settings
     * @returns Formatted string (e.g., "5 kyat 3 pae 2 yway")
     */
    formatGramAsKyatPaeYway(gram: number, customData?: Partial<Mass>, customSetting?: Partial<Setting>): string;
}
/**
 * Length converter for Burmese length units
 */
declare class LengthConvertor extends Convertor<Length> {
    /**
     * Creates a new length converter
     * @param data - Length conversion data
     * @param setting - Conversion settings
     * @param symbols - Unit symbols
     */
    constructor(data: Length, setting: Setting, symbols?: Record<string, string>);
    /**
     * Converts taung and let-thit to meters
     * @param taung - Number of taung
     * @param letThit - Number of let-thit (1/24 of taung)
     * @param customData - Optional custom conversion data
     * @param customSetting - Optional custom settings
     * @returns Conversion result in meters
     */
    taungLetThit2Meter(taung: number, letThit?: number, customData?: Partial<Length>, customSetting?: Partial<Setting>): ConversionResult;
    /**
     * Converts meters to taung and let-thit
     * @param meter - Number of meters
     * @param customData - Optional custom conversion data
     * @param customSetting - Optional custom settings
     * @returns Array with [taung, letThit]
     */
    meter2TaungLetThit(meter: number, customData?: Partial<Length>, customSetting?: Partial<Setting>): number[];
    /**
     * Formats a meter value as taung and let-thit
     * @param meter - Number of meters
     * @param customData - Optional custom conversion data
     * @param customSetting - Optional custom settings
     * @returns Formatted string (e.g., "5 taung 3 let thit")
     */
    formatMeterAsTaungLetThit(meter: number, customData?: Partial<Length>, customSetting?: Partial<Setting>): string;
}
/**
 * Volume converter for Burmese volume units
 */
declare class VolumeConvertor extends Convertor<Volume> {
    /**
     * Creates a new volume converter
     * @param data - Volume conversion data
     * @param setting - Conversion settings
     * @param symbols - Unit symbols
     */
    constructor(data: Volume, setting: Setting, symbols?: Record<string, string>);
    /**
     * Converts pyi and sa-le to liters
     * @param pyi - Number of pyi
     * @param saLe - Number of sa-le (1/4 of pyi)
     * @param customData - Optional custom conversion data
     * @param customSetting - Optional custom settings
     * @returns Conversion result in liters
     */
    pyiSaLe2Liter(pyi: number, saLe?: number, customData?: Partial<Volume>, customSetting?: Partial<Setting>): ConversionResult;
    /**
     * Converts liters to pyi and sa-le
     * @param liter - Number of liters
     * @param customData - Optional custom conversion data
     * @param customSetting - Optional custom settings
     * @returns Array with [pyi, saLe]
     */
    liter2PyiSaLe(liter: number, customData?: Partial<Volume>, customSetting?: Partial<Setting>): number[];
    /**
     * Formats a liter value as pyi and sa-le
     * @param liter - Number of liters
     * @param customData - Optional custom conversion data
     * @param customSetting - Optional custom settings
     * @returns Formatted string (e.g., "5 pyi 2 sa le")
     */
    formatLiterAsPyiSaLe(liter: number, customData?: Partial<Volume>, customSetting?: Partial<Setting>): string;
}
/**
 * Money converter for Burmese currency units
 */
declare class MoneyConvertor extends Convertor<Money> {
    /**
     * Creates a new money converter
     * @param data - Money conversion data
     * @param setting - Conversion settings
     * @param symbols - Unit symbols
     */
    constructor(data: Money, setting: Setting, symbols?: Record<string, string>);
    /**
     * Converts kyat and pya to decimal kyat
     * @param kyat - Number of kyat
     * @param pya - Number of pya (1/100 of kyat)
     * @param _customData - Optional custom conversion data (unused)
     * @param customSetting - Optional custom settings
     * @returns Conversion result in decimal kyat
     */
    kyatPya2Decimal(kyat: number, pya?: number, _customData?: Partial<Money>, customSetting?: Partial<Setting>): ConversionResult;
    /**
     * Converts decimal kyat to kyat and pya
     * @param decimal - Decimal kyat amount
     * @param _customData - Optional custom conversion data (unused)
     * @param _customSetting - Optional custom settings (unused)
     * @returns Array with [kyat, pya]
     */
    decimal2KyatPya(decimal: number, _customData?: Partial<Money>, _customSetting?: Partial<Setting>): number[];
    /**
     * Formats a decimal kyat value as kyat and pya
     * @param decimal - Decimal kyat amount
     * @param _customData - Optional custom conversion data (unused)
     * @param customSetting - Optional custom settings
     * @returns Formatted string (e.g., "5 Ks 50 pya" or "5.50 Ks")
     */
    formatDecimalAsKyatPya(decimal: number, _customData?: Partial<Money>, customSetting?: Partial<Setting>): string;
}
declare const massConvertor: MassConvertor;
declare const lengthConvertor: LengthConvertor;
declare const volumeConvertor: VolumeConvertor;
declare const moneyConvertor: MoneyConvertor;
/**
 * Factory function to create a converter of the specified type
 * @param category - Measurement category
 * @returns Appropriate converter instance
 */
declare const createConverter: (category: MeasurementCategory) => Convertor<any>;

export { Convertor, LENGTH, LengthConvertor, MASS, MONEY, MassConvertor, MoneyConvertor, VOLUME, VolumeConvertor, createConverter, lengthConvertor, massConvertor, moneyConvertor, volumeConvertor };
