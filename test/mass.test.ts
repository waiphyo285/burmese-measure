import { massConvertor, MASS } from '../lib/index';

describe('MassConvertor', () => {
  // Reset settings before each test
  beforeEach(() => {
    massConvertor.updateSettings(MASS.settings);
  });

  describe('metric2Burmese', () => {
    it('should convert grams to kyat_thar correctly', () => {
      const result = massConvertor.metric2Burmese(1);
      expect(result.value).toBeCloseTo(0.061241, 6);
      expect(result.originalValue).toBe(1);
      expect(result.fromUnit).toBe('gram');
      expect(result.toUnit).toBe('kyat_thar');
    });

    it('should handle zero values', () => {
      const result = massConvertor.metric2Burmese(0);
      expect(result.value).toBe(0);
    });

    it('should handle negative values', () => {
      const result = massConvertor.metric2Burmese(-5);
      expect(result.value).toBeCloseTo(-0.306203, 6);
    });

    it('should handle large values', () => {
      const result = massConvertor.metric2Burmese(1000);
      expect(result.value).toBeCloseTo(61.240552, 6);
    });

    it('should use custom decimal places', () => {
      const result = massConvertor.metric2Burmese(1, {}, { decimal: 2 });
      expect(result.value).toBeCloseTo(0.06, 2);
    });

    it('should use custom units', () => {
      const result = massConvertor.metric2Burmese(1, {}, { from: 'gram', to: 'pae_thar' });
      expect(result.value).toBeCloseTo(0.979883, 6);
      expect(result.fromUnit).toBe('gram');
      expect(result.toUnit).toBe('pae_thar');
    });
  });

  describe('burmese2Metric', () => {
    it('should convert kyat_thar to grams correctly', () => {
      const result = massConvertor.burmese2Metric(1);
      expect(result.value).toBeCloseTo(16.3293, 6);
      expect(result.originalValue).toBe(1);
      expect(result.fromUnit).toBe('kyat_thar');
      expect(result.toUnit).toBe('gram');
    });

    it('should handle zero values', () => {
      const result = massConvertor.burmese2Metric(0);
      expect(result.value).toBe(0);
    });

    it('should handle negative values', () => {
      const result = massConvertor.burmese2Metric(-5);
      expect(result.value).toBeCloseTo(-81.6465, 6);
    });

    it('should handle large values', () => {
      const result = massConvertor.burmese2Metric(100);
      expect(result.value).toBeCloseTo(1632.93, 6);
    });
  });

  describe('kyatPae2Gram', () => {
    it('should convert kyat and pae to grams correctly', () => {
      const result = massConvertor.kyatPae2Gram(7, 13);
      expect(result.value).toBeCloseTo(128.418488, 6);
    });

    it('should handle kyat only', () => {
      const result = massConvertor.kyatPae2Gram(5);
      expect(result.value).toBeCloseTo(81.6465, 6);
    });
  });

  describe('kyatPaeYway2Gram', () => {
    it('should convert kyat, pae, and yway to grams correctly', () => {
      const result = massConvertor.kyatPaeYway2Gram(7, 13, 6);
      expect(result.value).toBeCloseTo(128.766, 6);
    });

    it('should handle kyat only', () => {
      const result = massConvertor.kyatPaeYway2Gram(5);
      expect(result.value).toBeCloseTo(81.6465, 6);
    });
  });

  describe('gram2KyatPae', () => {
    it('should convert grams to kyat and pae correctly', () => {
      const [kyat, pae] = massConvertor.gram2KyatPae(128.42);
      expect(kyat).toBe(7);
      expect(pae).toBeCloseTo(13.831, 3);
    });

    it('should handle exact kyat values', () => {
      const [kyat, pae] = massConvertor.gram2KyatPae(81.6465);
      expect(kyat).toBe(5);
      expect(pae).toBeCloseTo(0, 6);
    });
  });

  describe('gram2KyatPaeYway', () => {
    it('should convert grams to kyat, pae, and yway correctly', () => {
      const [kyat, pae, yway] = massConvertor.gram2KyatPaeYway(128.42);
      expect(kyat).toBe(7);
      expect(pae).toBe(13);
      expect(yway).toBeCloseTo(6.648, 3);
    });

    it('should handle exact kyat values', () => {
      const [kyat, pae, yway] = massConvertor.gram2KyatPaeYway(81.6465);
      expect(kyat).toBe(5);
      expect(pae).toBe(0);
      expect(yway).toBeCloseTo(0, 6);
    });
  });

  describe('formatGramAsKyatPaeYway', () => {
    it('should format grams as kyat, pae, and yway correctly', () => {
      const formatted = massConvertor.formatGramAsKyatPaeYway(128.42);
      expect(formatted).toBe('7 kyat 13 pae 6.648 yway gyi');
    });

    it('should handle kyat only', () => {
      const formatted = massConvertor.formatGramAsKyatPaeYway(81.6465);
      expect(formatted).toBe('5 kyat');
    });

    it('should handle zero values', () => {
      const formatted = massConvertor.formatGramAsKyatPaeYway(0);
      expect(formatted).toBe('0');
    });
  });

  describe('batch operations', () => {
    it('should convert multiple values from metric to Burmese', () => {
      const result = massConvertor.batchMetric2Burmese([1, 2, 3]);
      expect(result.results.length).toBe(3);
      expect(result.results[0].value).toBeCloseTo(0.061241, 6);
      expect(result.results[1].value).toBeCloseTo(0.122481, 6);
      expect(result.results[2].value).toBeCloseTo(0.183722, 6);
    });

    it('should convert multiple values from Burmese to metric', () => {
      const result = massConvertor.batchBurmese2Metric([1, 2, 3]);
      expect(result.results.length).toBe(3);
      expect(result.results[0].value).toBeCloseTo(16.3293, 6);
      expect(result.results[1].value).toBeCloseTo(32.6586, 6);
      expect(result.results[2].value).toBeCloseTo(48.9879, 6);
    });
  });

  describe('error handling', () => {
    it('should throw error for non-numeric input in metric2Burmese', () => {
      expect(() => {
        // @ts-ignore - Testing runtime type checking
        massConvertor.metric2Burmese('not a number');
      }).toThrow();
    });

    it('should throw error for non-numeric input in burmese2Metric', () => {
      expect(() => {
        // @ts-ignore - Testing runtime type checking
        massConvertor.burmese2Metric('not a number');
      }).toThrow();
    });
  });
});