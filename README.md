# Burmese Measure

[![npm version](https://img.shields.io/npm/v/burmese-measure.svg)](https://www.npmjs.com/package/burmese-measure)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A comprehensive JavaScript library for converting between Burmese traditional measurement units and the metric system.

## Features

- 🔄 Conversion between Burmese units and metric system
- 📏 Support for mass, length, volume, and money units
- 🧮 Specialized conversions with batch capabilities
- ⚙️ Configurable settings and custom conversion factors
- 🖥️ Command-line interface for quick conversions

## Installation

```bash
# Using npm
npm install burmese-measure

# Using yarn
yarn add burmese-measure

# Using pnpm
pnpm add burmese-measure
```

## Quick Example

```javascript
import { massConvertor, lengthConvertor } from 'burmese-measure';

// Convert 100 grams to kyatThar
const result = massConvertor.metric2Burmese(100);
console.log(`100 grams = ${result.value} kyatThar`);

// Convert 2.5 meters to taung and let-thit
const formatted = lengthConvertor.formatMeterAsTaungLetThit(2.5);
console.log(`2.5 meters = ${formatted}`);
```

## CLI Usage

```bash
# List available units
npx burmese-measure list mass

# Convert mass
npx burmese-measure mass --gram 100 --format

# Convert length with formatted output
npx burmese-measure length --meter 2.5 --format
```

## Documentation

For detailed documentation and examples, visit:

- [Documentation](https://waiphyo285.github.io/burmese-measure/)
- [Demo](https://waiphyo285.github.io/burmese-measure/demo.html)

## Supported Units

### Mass Units
- ywayLay, ywayGyi, paeThar, muThar, matThar, kyatThar, pateThar

### Length Units
- sanchi, hnan, muyaw, letThit, maik, htwa, taung, lan, ta

### Volume Units
- laMyu, laMyet, laMe, saLe, hkwet, pyi, seit, hkwe, tin

### Money Units
- pya, mu, mat, kyat

## License

MIT © [Wai Phyo Naing](https://github.com/waiphyo285)