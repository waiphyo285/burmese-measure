#!/usr/bin/env node

import { Command } from 'commander';
import {
  massConvertor,
  lengthConvertor,
  volumeConvertor,
  moneyConvertor,
  createConverter,
  MASS,
  LENGTH,
  VOLUME,
  MONEY,
} from './index';
import { MeasurementCategory } from './types';

const program = new Command();

// Set up CLI metadata
program
  .name('burmese-measure')
  .description('Convert between Burmese measurement units and metric system')
  .version('2.0.0');

// Helper function to list available units for a category
const listUnits = (category: MeasurementCategory): void => {
  let units: Record<string, any> = {};
  let symbols: Record<string, string> = {};

  switch (category) {
    case 'mass':
      units = MASS.data;
      symbols = MASS.symbols;
      break;
    case 'length':
      units = LENGTH.data;
      symbols = LENGTH.symbols;
      break;
    case 'volume':
      units = VOLUME.data;
      symbols = VOLUME.symbols;
      break;
    case 'money':
      units = MONEY.data;
      symbols = MONEY.symbols;
      break;
  }

  console.log(`\nAvailable ${category} units:`);
  Object.keys(units).forEach((unit) => {
    console.log(`  - ${unit} (${symbols[unit] || unit})`);
  });
};

// Add list command
program
  .command('list')
  .description('List available units for a measurement category')
  .argument('<category>', 'Measurement category (mass, length, volume, money)')
  .action((category: string) => {
    if (!['mass', 'length', 'volume', 'money'].includes(category)) {
      console.error('Error: Category must be one of: mass, length, volume, money');
      process.exit(1);
    }

    listUnits(category as MeasurementCategory);
  });

// Add convert command
program
  .command('convert')
  .description('Convert a value between units')
  .argument('<value>', 'Value to convert')
  .argument('<from>', 'Source unit')
  .argument('<to>', 'Target unit')
  .option('-c, --category <category>', 'Measurement category (mass, length, volume, money)', 'mass')
  .option('-d, --decimals <decimals>', 'Number of decimal places', '6')
  .option('-f, --format', 'Format the output with unit symbols', false)
  .action((value: string, from: string, to: string, options) => {
    const numValue = parseFloat(value);
    const decimals = parseInt(options.decimals);

    if (isNaN(numValue)) {
      console.error('Error: Value must be a number');
      process.exit(1);
    }

    if (!['mass', 'length', 'volume', 'money'].includes(options.category)) {
      console.error('Error: Category must be one of: mass, length, volume, money');
      process.exit(1);
    }

    try {
      const converter = createConverter(options.category as MeasurementCategory);

      // Update settings for this conversion
      converter.updateSettings({
        decimal: decimals,
        from,
        to,
        format: {
          includeUnit: options.format,
        },
      });

      // Perform conversion
      const result = converter.metric2Burmese(numValue);

      if (options.format) {
        console.log(result.formatted);
      } else {
        console.log(result.value);
      }
    } catch (error) {
      console.error(`Error: ${(error as Error).message}`);
      process.exit(1);
    }
  });

// Add specialized commands for each converter
program
  .command('mass')
  .description('Mass conversion utilities')
  .option('-k, --kyat <kyat>', 'Kyat value')
  .option('-p, --pae <pae>', 'Pae value')
  .option('-y, --yway <yway>', 'Yway value')
  .option('-g, --gram <gram>', 'Gram value')
  .option('-f, --format', 'Format the output with unit symbols', false)
  .action((options) => {
    try {
      if (options.gram !== undefined) {
        // Convert from gram to kyat-pae-yway
        const gram = parseFloat(options.gram);
        if (isNaN(gram)) {
          throw new Error('Gram value must be a number');
        }

        if (options.format) {
          console.log(massConvertor.formatGramAsKyatPaeYway(gram));
        } else {
          console.log(massConvertor.gram2KyatPaeYway(gram));
        }
      } else if (options.kyat !== undefined) {
        // Convert from kyat-pae-yway to gram
        const kyat = parseFloat(options.kyat);
        const pae = options.pae ? parseFloat(options.pae) : 0;
        const yway = options.yway ? parseFloat(options.yway) : 0;

        if (isNaN(kyat) || isNaN(pae) || isNaN(yway)) {
          throw new Error('All values must be numbers');
        }

        const result = massConvertor.kyatPaeYway2Gram(kyat, pae, yway);

        if (options.format) {
          console.log(result.formatted);
        } else {
          console.log(result.value);
        }
      } else {
        console.log('Error: Either --gram or --kyat must be specified');
        process.exit(1);
      }
    } catch (error) {
      console.error(`Error: ${(error as Error).message}`);
      process.exit(1);
    }
  });

program
  .command('length')
  .description('Length conversion utilities')
  .option('-t, --taung <taung>', 'Taung value')
  .option('-l, --letthit <letthit>', 'Let-thit value')
  .option('-m, --meter <meter>', 'Meter value')
  .option('-f, --format', 'Format the output with unit symbols', false)
  .action((options) => {
    try {
      if (options.meter !== undefined) {
        // Convert from meter to taung-letthit
        const meter = parseFloat(options.meter);
        if (isNaN(meter)) {
          throw new Error('Meter value must be a number');
        }

        if (options.format) {
          console.log(lengthConvertor.formatMeterAsTaungLetThit(meter));
        } else {
          console.log(lengthConvertor.meter2TaungLetThit(meter));
        }
      } else if (options.taung !== undefined) {
        // Convert from taung-letthit to meter
        const taung = parseFloat(options.taung);
        const letthit = options.letthit ? parseFloat(options.letthit) : 0;

        if (isNaN(taung) || isNaN(letthit)) {
          throw new Error('All values must be numbers');
        }

        const result = lengthConvertor.taungLetThit2Meter(taung, letthit);

        if (options.format) {
          console.log(result.formatted);
        } else {
          console.log(result.value);
        }
      } else {
        console.log('Error: Either --meter or --taung must be specified');
        process.exit(1);
      }
    } catch (error) {
      console.error(`Error: ${(error as Error).message}`);
      process.exit(1);
    }
  });

program
  .command('volume')
  .description('Volume conversion utilities')
  .option('-p, --pyi <pyi>', 'Pyi value')
  .option('-s, --sale <sale>', 'Sa-le value')
  .option('-l, --liter <liter>', 'Liter value')
  .option('-f, --format', 'Format the output with unit symbols', false)
  .action((options) => {
    try {
      if (options.liter !== undefined) {
        // Convert from liter to pyi-sale
        const liter = parseFloat(options.liter);
        if (isNaN(liter)) {
          throw new Error('Liter value must be a number');
        }

        if (options.format) {
          console.log(volumeConvertor.formatLiterAsPyiSaLe(liter));
        } else {
          console.log(volumeConvertor.liter2PyiSaLe(liter));
        }
      } else if (options.pyi !== undefined) {
        // Convert from pyi-sale to liter
        const pyi = parseFloat(options.pyi);
        const sale = options.sale ? parseFloat(options.sale) : 0;

        if (isNaN(pyi) || isNaN(sale)) {
          throw new Error('All values must be numbers');
        }

        const result = volumeConvertor.pyiSaLe2Liter(pyi, sale);

        if (options.format) {
          console.log(result.formatted);
        } else {
          console.log(result.value);
        }
      } else {
        console.log('Error: Either --liter or --pyi must be specified');
        process.exit(1);
      }
    } catch (error) {
      console.error(`Error: ${(error as Error).message}`);
      process.exit(1);
    }
  });

program
  .command('money')
  .description('Money conversion utilities')
  .option('-k, --kyat <kyat>', 'Kyat value')
  .option('-p, --pya <pya>', 'Pya value')
  .option('-d, --decimal <decimal>', 'Decimal kyat value')
  .option('-f, --format', 'Format the output with unit symbols', true)
  .option('-l, --locale <locale>', 'Locale for formatting', 'my-MM')
  .action((options) => {
    try {
      if (options.decimal !== undefined) {
        // Convert from decimal to kyat-pya
        const decimal = parseFloat(options.decimal);
        if (isNaN(decimal)) {
          throw new Error('Decimal value must be a number');
        }

        moneyConvertor.updateSettings({
          format: {
            localize: options.format,
            locale: options.locale,
          },
        });

        if (options.format) {
          console.log(moneyConvertor.formatDecimalAsKyatPya(decimal));
        } else {
          console.log(moneyConvertor.decimal2KyatPya(decimal));
        }
      } else if (options.kyat !== undefined) {
        // Convert from kyat-pya to decimal
        const kyat = parseFloat(options.kyat);
        const pya = options.pya ? parseFloat(options.pya) : 0;

        if (isNaN(kyat) || isNaN(pya)) {
          throw new Error('All values must be numbers');
        }

        moneyConvertor.updateSettings({
          format: {
            localize: options.format,
            locale: options.locale,
          },
        });

        const result = moneyConvertor.kyatPya2Decimal(kyat, pya);

        if (options.format) {
          console.log(result.formatted);
        } else {
          console.log(result.value);
        }
      } else {
        console.log('Error: Either --decimal or --kyat must be specified');
        process.exit(1);
      }
    } catch (error) {
      console.error(`Error: ${(error as Error).message}`);
      process.exit(1);
    }
  });

// Parse command line arguments
program.parse();

// If no arguments, show help
if (process.argv.length <= 2) {
  program.help();
}
