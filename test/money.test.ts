import { moneyConvertor, MONEY } from '../lib/index';

describe('MoneyConvertor', () => {
  // Reset settings before each test
  beforeEach(() => {
    moneyConvertor.updateSettings(MONEY.settings);
  });

  describe('kyatPya2Decimal', () => {
    it('should convert kyat and pya to decimal kyat correctly', () => {
      const result = moneyConvertor.kyatPya2Decimal(5, 50);
      expect(result.value).toBe(5.5);
      expect(result.originalValue).toBe(5.5);
      expect(result.fromUnit).toBe('kyat_pya');
      expect(result.toUnit).toBe('kyat');
    });

    it('should handle kyat only', () => {
      const result = moneyConvertor.kyatPya2Decimal(5);
      expect(result.value).toBe(5);
    });

    it('should handle zero values', () => {
      const result = moneyConvertor.kyatPya2Decimal(0, 0);
      expect(result.value).toBe(0);
    });

    it('should handle large values', () => {
      const result = moneyConvertor.kyatPya2Decimal(1000, 99);
      expect(result.value).toBe(1000.99);
    });
  });

  describe('decimal2KyatPya', () => {
    it('should convert decimal kyat to kyat and pya correctly', () => {
      const [kyat, pya] = moneyConvertor.decimal2KyatPya(5.5);
      expect(kyat).toBe(5);
      expect(pya).toBe(50);
    });

    it('should handle kyat only', () => {
      const [kyat, pya] = moneyConvertor.decimal2KyatPya(5);
      expect(kyat).toBe(5);
      expect(pya).toBe(0);
    });

    it('should handle zero values', () => {
      const [kyat, pya] = moneyConvertor.decimal2KyatPya(0);
      expect(kyat).toBe(0);
      expect(pya).toBe(0);
    });

    it('should handle rounding', () => {
      const [kyat, pya] = moneyConvertor.decimal2KyatPya(5.999);
      expect(kyat).toBe(5);
      expect(pya).toBe(100);
    });
  });

  describe('formatDecimalAsKyatPya', () => {
    it('should format decimal kyat as kyat and pya correctly', () => {
      const formatted = moneyConvertor.formatDecimalAsKyatPya(5.5);
      // This will depend on the locale, but we can check for basic structure
      expect(formatted).toContain('5');
      expect(formatted).toContain('50');
    });

    it('should handle kyat only', () => {
      moneyConvertor.updateSettings({
        format: {
          localize: false
        }
      });
      const formatted = moneyConvertor.formatDecimalAsKyatPya(5);
      expect(formatted).toBe('5 Ks');
    });

    it('should handle zero values', () => {
      moneyConvertor.updateSettings({
        format: {
          localize: false
        }
      });
      const formatted = moneyConvertor.formatDecimalAsKyatPya(0);
      expect(formatted).toBe('0 Ks');
    });
  });

  describe('error handling', () => {
    it('should throw error for non-numeric input in kyatPya2Decimal', () => {
      expect(() => {
        // @ts-ignore - Testing runtime type checking
        moneyConvertor.kyatPya2Decimal('not a number');
      }).toThrow();
    });

    it('should throw error for non-numeric input in decimal2KyatPya', () => {
      expect(() => {
        // @ts-ignore - Testing runtime type checking
        moneyConvertor.decimal2KyatPya('not a number');
      }).toThrow();
    });
  });
});