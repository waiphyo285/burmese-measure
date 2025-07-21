import { lengthConvertor, LENGTH } from '../lib/index';

describe('LengthConvertor', () => {
  // Reset settings before each test
  beforeEach(() => {
    lengthConvertor.updateSettings(LENGTH.settings);
  });

  describe('metric2Burmese', () => {
    it('should convert meters to lan correctly', () => {
      const result = lengthConvertor.metric2Burmese(1);
      expect(result.value).toBeCloseTo(0.546807, 6);
      expect(result.originalValue).toBe(1);
      expect(result.fromUnit).toBe('meter');
      expect(result.toUnit).toBe('lan');
    });

    it('should handle zero values', () => {
      const result = lengthConvertor.metric2Burmese(0);
      expect(result.value).toBe(0);
    });

    it('should handle negative values', () => {
      const result = lengthConvertor.metric2Burmese(-5);
      expect(result.value).toBeCloseTo(-2.734033, 6);
    });

    it('should handle large values', () => {
      const result = lengthConvertor.metric2Burmese(1000);
      expect(result.value).toBeCloseTo(546.806649, 6);
    });

    it('should use custom decimal places', () => {
      const result = lengthConvertor.metric2Burmese(1, {}, { decimal: 2 });
      expect(result.value).toBeCloseTo(0.55, 2);
    });

    it('should use custom units', () => {
      const result = lengthConvertor.metric2Burmese(1, {}, { from: 'meter', to: 'taung' });
      expect(result.value).toBeCloseTo(2.187664, 6);
      expect(result.fromUnit).toBe('meter');
      expect(result.toUnit).toBe('taung');
    });
  });

  describe('burmese2Metric', () => {
    it('should convert lan to meters correctly', () => {
      const result = lengthConvertor.burmese2Metric(1);
      expect(result.value).toBeCloseTo(1.8288, 6);
      expect(result.originalValue).toBe(1);
      expect(result.fromUnit).toBe('lan');
      expect(result.toUnit).toBe('meter');
    });

    it('should handle zero values', () => {
      const result = lengthConvertor.burmese2Metric(0);
      expect(result.value).toBe(0);
    });

    it('should handle negative values', () => {
      const result = lengthConvertor.burmese2Metric(-5);
      expect(result.value).toBeCloseTo(-9.144, 6);
    });

    it('should handle large values', () => {
      const result = lengthConvertor.burmese2Metric(100);
      expect(result.value).toBeCloseTo(182.88, 6);
    });
  });

  describe('taungLetThit2Meter', () => {
    it('should convert taung and let-thit to meters correctly', () => {
      const result = lengthConvertor.taungLetThit2Meter(5, 12);
      expect(result.value).toBeCloseTo(2.5146, 6);
    });

    it('should handle taung only', () => {
      const result = lengthConvertor.taungLetThit2Meter(5);
      expect(result.value).toBeCloseTo(2.286, 6);
    });
  });

  describe('meter2TaungLetThit', () => {
    it('should convert meters to taung and let-thit correctly', () => {
      const [taung, letThit] = lengthConvertor.meter2TaungLetThit(2.5);
      expect(taung).toBe(5);
      expect(letThit).toBeCloseTo(11.111, 3);
    });

    it('should handle exact taung values', () => {
      const [taung, letThit] = lengthConvertor.meter2TaungLetThit(2.286);
      expect(taung).toBe(5);
      expect(letThit).toBeCloseTo(0, 6);
    });
  });

  describe('formatMeterAsTaungLetThit', () => {
    it('should format meters as taung and let-thit correctly', () => {
      const formatted = lengthConvertor.formatMeterAsTaungLetThit(2.5);
      expect(formatted).toBe('5 taung 11.111 let thit');
    });

    it('should handle taung only', () => {
      const formatted = lengthConvertor.formatMeterAsTaungLetThit(2.286);
      expect(formatted).toBe('5 taung');
    });

    it('should handle zero values', () => {
      const formatted = lengthConvertor.formatMeterAsTaungLetThit(0);
      expect(formatted).toBe('0');
    });
  });

  describe('batch operations', () => {
    it('should convert multiple values from metric to Burmese', () => {
      const result = lengthConvertor.batchMetric2Burmese([1, 2, 3]);
      expect(result.results.length).toBe(3);
      expect(result.results[0].value).toBeCloseTo(0.546807, 6);
      expect(result.results[1].value).toBeCloseTo(1.093613, 6);
      expect(result.results[2].value).toBeCloseTo(1.64042, 6);
    });

    it('should convert multiple values from Burmese to metric', () => {
      const result = lengthConvertor.batchBurmese2Metric([1, 2, 3]);
      expect(result.results.length).toBe(3);
      expect(result.results[0].value).toBeCloseTo(1.8288, 6);
      expect(result.results[1].value).toBeCloseTo(3.6576, 6);
      expect(result.results[2].value).toBeCloseTo(5.4864, 6);
    });
  });

  describe('error handling', () => {
    it('should throw error for non-numeric input in metric2Burmese', () => {
      expect(() => {
        // @ts-ignore - Testing runtime type checking
        lengthConvertor.metric2Burmese('not a number');
      }).toThrow();
    });

    it('should throw error for non-numeric input in burmese2Metric', () => {
      expect(() => {
        // @ts-ignore - Testing runtime type checking
        lengthConvertor.burmese2Metric('not a number');
      }).toThrow();
    });
  });
});