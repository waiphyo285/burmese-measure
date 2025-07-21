import { volumeConvertor, VOLUME } from '../lib/index';

describe('VolumeConvertor', () => {
  // Reset settings before each test
  beforeEach(() => {
    volumeConvertor.updateSettings(VOLUME.settings);
  });

  describe('metric2Burmese', () => {
    it('should convert liters to pyi correctly', () => {
      const result = volumeConvertor.metric2Burmese(1);
      expect(result.value).toBeCloseTo(0.391055, 6);
      expect(result.originalValue).toBe(1);
      expect(result.fromUnit).toBe('liter');
      expect(result.toUnit).toBe('pyi');
    });

    it('should handle zero values', () => {
      const result = volumeConvertor.metric2Burmese(0);
      expect(result.value).toBe(0);
    });

    it('should handle negative values', () => {
      const result = volumeConvertor.metric2Burmese(-5);
      expect(result.value).toBeCloseTo(-1.955274, 6);
    });

    it('should handle large values', () => {
      const result = volumeConvertor.metric2Burmese(1000);
      expect(result.value).toBeCloseTo(391.054747, 6);
    });

    it('should use custom decimal places', () => {
      const result = volumeConvertor.metric2Burmese(1, {}, { decimal: 2 });
      expect(result.value).toBeCloseTo(0.39, 2);
    });

    it('should use custom units', () => {
      const result = volumeConvertor.metric2Burmese(1, {}, { from: 'liter', to: 'tin' });
      expect(result.value).toBeCloseTo(0.024441, 6);
      expect(result.fromUnit).toBe('liter');
      expect(result.toUnit).toBe('tin');
    });
  });

  describe('burmese2Metric', () => {
    it('should convert pyi to liters correctly', () => {
      const result = volumeConvertor.burmese2Metric(1);
      expect(result.value).toBeCloseTo(2.55718, 6);
      expect(result.originalValue).toBe(1);
      expect(result.fromUnit).toBe('pyi');
      expect(result.toUnit).toBe('liter');
    });

    it('should handle zero values', () => {
      const result = volumeConvertor.burmese2Metric(0);
      expect(result.value).toBe(0);
    });

    it('should handle negative values', () => {
      const result = volumeConvertor.burmese2Metric(-5);
      expect(result.value).toBeCloseTo(-12.7859, 6);
    });

    it('should handle large values', () => {
      const result = volumeConvertor.burmese2Metric(100);
      expect(result.value).toBeCloseTo(255.718, 6);
    });
  });

  describe('pyiSaLe2Liter', () => {
    it('should convert pyi and sa-le to liters correctly', () => {
      const result = volumeConvertor.pyiSaLe2Liter(5, 2);
      expect(result.value).toBeCloseTo(13.4252, 6);
    });

    it('should handle pyi only', () => {
      const result = volumeConvertor.pyiSaLe2Liter(5);
      expect(result.value).toBeCloseTo(12.7859, 6);
    });
  });

  describe('liter2PyiSaLe', () => {
    it('should convert liters to pyi and sa-le correctly', () => {
      const [pyi, saLe] = volumeConvertor.liter2PyiSaLe(13.5);
      expect(pyi).toBe(5);
      expect(saLe).toBeCloseTo(2.08, 2);
    });

    it('should handle exact pyi values', () => {
      const [pyi, saLe] = volumeConvertor.liter2PyiSaLe(12.7859);
      expect(pyi).toBe(5);
      expect(saLe).toBeCloseTo(0, 6);
    });
  });

  describe('formatLiterAsPyiSaLe', () => {
    it('should format liters as pyi and sa-le correctly', () => {
      const formatted = volumeConvertor.formatLiterAsPyiSaLe(13.5);
      expect(formatted).toBe('5 pyi 2.08 sa le');
    });

    it('should handle pyi only', () => {
      const formatted = volumeConvertor.formatLiterAsPyiSaLe(12.7859);
      expect(formatted).toBe('5 pyi');
    });

    it('should handle zero values', () => {
      const formatted = volumeConvertor.formatLiterAsPyiSaLe(0);
      expect(formatted).toBe('0');
    });
  });

  describe('batch operations', () => {
    it('should convert multiple values from metric to Burmese', () => {
      const result = volumeConvertor.batchMetric2Burmese([1, 2, 3]);
      expect(result.results.length).toBe(3);
      expect(result.results[0].value).toBeCloseTo(0.391055, 6);
      expect(result.results[1].value).toBeCloseTo(0.782109, 6);
      expect(result.results[2].value).toBeCloseTo(1.173164, 6);
    });

    it('should convert multiple values from Burmese to metric', () => {
      const result = volumeConvertor.batchBurmese2Metric([1, 2, 3]);
      expect(result.results.length).toBe(3);
      expect(result.results[0].value).toBeCloseTo(2.55718, 6);
      expect(result.results[1].value).toBeCloseTo(5.11436, 6);
      expect(result.results[2].value).toBeCloseTo(7.67154, 6);
    });
  });

  describe('error handling', () => {
    it('should throw error for non-numeric input in metric2Burmese', () => {
      expect(() => {
        // @ts-ignore - Testing runtime type checking
        volumeConvertor.metric2Burmese('not a number');
      }).toThrow();
    });

    it('should throw error for non-numeric input in burmese2Metric', () => {
      expect(() => {
        // @ts-ignore - Testing runtime type checking
        volumeConvertor.burmese2Metric('not a number');
      }).toThrow();
    });
  });
});