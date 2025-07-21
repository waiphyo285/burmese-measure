# burmese-measure

A comprehensive conversion package for Burmese measurement units and the metric system. This package provides easy-to-use converters for mass, length, volume, and money units with both programmatic and command-line interfaces.

<p>
   <a href="https://github.com/waiphyo285/burmese-measure/blob/main/LICENSE"><img alt="npm" src="https://img.shields.io/badge/license-MIT-blue?style=flat"></a>
   <a href="https://www.npmjs.com/package/burmese-measure"><img alt="npm" src="https://img.shields.io/npm/v/burmese-measure.svg"></a>
   <a href="https://www.npmjs.com/package/burmese-measure"><img alt="npm" src="https://img.shields.io/npm/dt/burmese-measure.svg"></a>
</p>

## Features

- Convert between Burmese units and metric system units
- Support for mass, length, volume, and money conversions
- Fluent API with chainable methods
- Batch conversion for multiple values
- Formatted output with unit symbols
- Comprehensive error handling
- TypeScript support with full type definitions
- Command-line interface (CLI) for terminal usage
- ESM and CommonJS support
- Extensive documentation and examples

## Installation

```bash
# Using npm
npm install burmese-measure

# Using yarn
yarn add burmese-measure

# Using pnpm
pnpm add burmese-measure
```

## Quick Start

### CommonJS

```javascript
const {
  massConvertor,
  lengthConvertor,
  volumeConvertor,
  moneyConvertor,
} = require('burmese-measure');

// Convert 100 grams to kyatThar
const result = massConvertor.metric2Burmese(100);
console.log(`100 grams = ${result.value} kyatThar`);

// Convert 5 kyat 3 pae to grams
const gramResult = massConvertor.kyatPae2Gram(5, 3);
console.log(`5 kyat 3 pae = ${gramResult.value} grams`);
```

### ES Modules

```javascript
import { massConvertor, lengthConvertor, volumeConvertor, moneyConvertor } from 'burmese-measure';

// Convert 2 meters to lan
const result = lengthConvertor.metric2Burmese(2);
console.log(`2 meters = ${result.value} lan`);

// Format 2.5 meters as taung and let-thit
const formatted = lengthConvertor.formatMeterAsTaungLetThit(2.5);
console.log(`2.5 meters = ${formatted}`);
```

## API Reference

### Mass Converter

```typescript
// Basic conversions
massConvertor.metric2Burmese(value: number): ConversionResult;
massConvertor.burmese2Metric(value: number): ConversionResult;

// Specialized conversions
massConvertor.kyatPae2Gram(kyat: number, pae?: number): ConversionResult;
massConvertor.kyatPaeYway2Gram(kyat: number, pae?: number, yway?: number): ConversionResult;
massConvertor.gram2KyatPae(gram: number): [kyat: number, pae: number];
massConvertor.gram2KyatPaeYway(gram: number): [kyat: number, pae: number, yway: number];
massConvertor.formatGramAsKyatPaeYway(gram: number): string;

// Batch conversions
massConvertor.batchMetric2Burmese(values: number[]): BatchConversionResult;
massConvertor.batchBurmese2Metric(values: number[]): BatchConversionResult;

// Configuration
massConvertor.updateSettings({ decimal: 2, from: 'gram', to: 'kyatThar' });
```

### Length Converter

```typescript
// Basic conversions
lengthConvertor.metric2Burmese(value: number): ConversionResult;
lengthConvertor.burmese2Metric(value: number): ConversionResult;

// Specialized conversions
lengthConvertor.taungLetThit2Meter(taung: number, letThit?: number): ConversionResult;
lengthConvertor.meter2TaungLetThit(meter: number): [taung: number, letThit: number];
lengthConvertor.formatMeterAsTaungLetThit(meter: number): string;

// Batch conversions
lengthConvertor.batchMetric2Burmese(values: number[]): BatchConversionResult;
lengthConvertor.batchBurmese2Metric(values: number[]): BatchConversionResult;
```

### Volume Converter

```typescript
// Basic conversions
volumeConvertor.metric2Burmese(value: number): ConversionResult;
volumeConvertor.burmese2Metric(value: number): ConversionResult;

// Specialized conversions
volumeConvertor.pyiSaLe2Liter(pyi: number, saLe?: number): ConversionResult;
volumeConvertor.liter2PyiSaLe(liter: number): [pyi: number, saLe: number];
volumeConvertor.formatLiterAsPyiSaLe(liter: number): string;

// Batch conversions
volumeConvertor.batchMetric2Burmese(values: number[]): BatchConversionResult;
volumeConvertor.batchBurmese2Metric(values: number[]): BatchConversionResult;
```

### Money Converter

```typescript
// Specialized conversions
moneyConvertor.kyatPya2Decimal(kyat: number, pya?: number): ConversionResult;
moneyConvertor.decimal2KyatPya(decimal: number): [kyat: number, pya: number];
moneyConvertor.formatDecimalAsKyatPya(decimal: number): string;
```

## Command Line Interface

The package includes a CLI for quick conversions from the terminal:

```bash
# List available units
npx burmese-measure list mass
npx burmese-measure list length
npx burmese-measure list volume
npx burmese-measure list money

# Mass conversion utilities
npx burmese-measure mass --kyat 5 --pae 3 --format
npx burmese-measure mass --gram 100 --format

# Length conversion utilities
npx burmese-measure length --taung 5 --letthit 12 --format
npx burmese-measure length --meter 2.5 --format

# Volume conversion utilities
npx burmese-measure volume --pyi 5 --sale 2 --format
npx burmese-measure volume --liter 13.5 --format

# Money conversion utilities
npx burmese-measure money --kyat 5 --pya 50 --format
npx burmese-measure money --decimal 5.5 --format --locale en-US
```

## Burmese Measurement Units

### Mass Units

| Burmese unit | Metric equivalent (grams) | Description        |
| ------------ | ------------------------- | ------------------ |
| ywayLay      | 0.136078                  | Smallest mass unit |
| ywayGyi      | 0.272155                  | Double of ywayLay  |
| paeThar      | 1.02058                   | 1/16 of kyatThar   |
| muThar       | 2.04117                   | 1/8 of kyatThar    |
| matThar      | 4.08233                   | 1/4 of kyatThar    |
| kyatThar     | 16.3293                   | Standard mass unit |
| pateThar     | 1632.93                   | 100 kyatThar       |

### Length Units

| Burmese unit | Metric equivalent (meters) | Description            |
| ------------ | -------------------------- | ---------------------- |
| sanchi       | 0.000079375                | Smallest length unit   |
| hnan         | 0.00079375                 | 10 sanchi              |
| muyaw        | 0.0047625                  | 6 hnan                 |
| letThit      | 0.01905                    | 4 muyaw, 1/24 of taung |
| maik         | 0.1524                     | 8 letThit              |
| htwa         | 0.2286                     | 1.5 maik, 1/2 of taung |
| taung        | 0.4572                     | Standard length unit   |
| lan          | 1.8288                     | 4 taung                |
| ta           | 3.2004                     | 7 taung                |
| outThaba     | 64.008                     | 20 ta                  |
| kawtha       | 1280.16                    | 20 outThaba            |
| gaWout       | 5120.64                    | 4 kawtha               |
| yuzana       | 20482.56                   | 4 gaWout               |

### Volume Units

| Burmese unit | Metric equivalent (liters) | Description          |
| ------------ | -------------------------- | -------------------- |
| laMyu        | 0.0799118                  | Smallest volume unit |
| laMyet       | 0.159824                   | 2 laMyu              |
| laMe         | 0.319647                   | 2 laMyet             |
| saLe         | 0.639294                   | 2 laMe, 1/4 of pyi   |
| hkwet        | 1.27859                    | 2 saLe, 1/2 of pyi   |
| pyi          | 2.55718                    | Standard volume unit |
| seit         | 10.2287                    | 4 pyi                |
| hkwe         | 20.4574                    | 2 seit, 8 pyi        |
| tin          | 40.9148                    | 2 hkwe, 16 pyi       |

### Money Units

| Burmese unit | Value (in kyat) | Description            |
| ------------ | --------------- | ---------------------- |
| pya          | 0.01            | 1/100 of kyat          |
| mu           | 0.1             | 1/10 of kyat           |
| mat          | 0.25            | 1/4 of kyat            |
| kyat         | 1               | Standard currency unit |

## Advanced Usage

### Global Settings and Data

The library uses a global approach for both settings and conversion data. Instead of passing settings or custom data to each conversion method, you should update the global settings and data first and then perform conversions:

```javascript
// Update global settings for the converter
massConvertor.updateSettings({
  decimal: 2, // Number of decimal places in results
  from: 'gram', // Source unit
  to: 'paeThar', // Target unit
  format: {
    includeUnit: true, // Include unit symbol in formatted output
    localize: false, // Use localized number formatting
    locale: 'en-US', // Locale for number formatting (if localize is true)
  },
});

// Now all conversions will use these settings
const result = massConvertor.metric2Burmese(100);
console.log(`100 grams = ${result.formatted}`); // Uses the format settings above

// If you need to update conversion data (e.g., for custom conversion factors)
massConvertor.updateValues({
  kyatThar: 16.5, // Custom value for kyatThar in grams
  paeThar: 1.03125, // Custom value for paeThar in grams
});

// All subsequent conversions will use the updated data
const customResult = massConvertor.metric2Burmese(100);
console.log(`100 grams with custom data = ${customResult.formatted}`);
```

This approach makes the API cleaner and more consistent by separating configuration from operation. It also prevents inconsistencies that could occur when passing different settings to different methods.

````

### Batch Conversion

```javascript
// Convert multiple values at once
const batchResult = lengthConvertor.batchMetric2Burmese([1, 2, 3, 4, 5]);

// Process results
batchResult.results.forEach((result) => {
  console.log(`${result.originalValue} ${result.fromUnit} = ${result.value} ${result.toUnit}`);
});

// Get summary
console.log(
  `Converted ${batchResult.summary.count} values from ${batchResult.summary.fromUnit} to ${batchResult.summary.toUnit}`
);
````

### Formatting

```javascript
// Format with unit symbols
moneyConvertor.updateSettings({
  format: {
    includeUnit: true,
    localize: true,
    locale: 'my-MM',
  },
});

// Format as Burmese currency
const formatted = moneyConvertor.formatDecimalAsKyatPya(1234.56);
console.log(formatted); // Outputs formatted currency
```

## Browser Usage

The package can be used in browsers via a bundler like webpack, Rollup, or Parcel:

```html
<script type="module">
  import { massConvertor } from 'burmese-measure';

  document.getElementById('convert').addEventListener('click', () => {
    const grams = parseFloat(document.getElementById('grams').value);
    const result = massConvertor.formatGramAsKyatPaeYway(grams);
    document.getElementById('result').textContent = result;
  });
</script>
```

## Contribution

Contributions are highly welcomed! Here's how you can contribute:

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

Please make sure to update tests as appropriate and follow the code style.

## References

- [Burmese Measuring System](https://asian-recipe.com/burmese-measuring-system-2312)
- [Myanmar Units of Measurement](https://en.wikipedia.org/wiki/Myanmar_units_of_measurement)

## License

MIT License

Copyright (c) 2021-2025 Wai Phyo Naing

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
