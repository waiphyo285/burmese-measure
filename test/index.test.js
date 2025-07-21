const {
  MASS,
  LENGTH,
  VOLUME,
  MONEY,
  massConvertor,
  lengthConvertor,
  volumeConvertor,
  moneyConvertor,
} = require('../dist/index');

// Reset settings before tests
beforeEach(() => {
  massConvertor.updateSettings(MASS.settings);
  lengthConvertor.updateSettings(LENGTH.settings);
  volumeConvertor.updateSettings(VOLUME.settings);
  moneyConvertor.updateSettings(MONEY.settings);
});

// Mass Converter Tests
test('massConvertor.metric2Burmese should convert grams to kyat_thar', () => {
  const result = massConvertor.metric2Burmese(1);
  expect(result.value).toBeGreaterThan(0);
  expect(result.fromUnit).toBe('gram');
  expect(result.toUnit).toBe('kyatThar');
});

test('massConvertor.burmese2Metric should convert kyat_thar to grams', () => {
  const result = massConvertor.burmese2Metric(1);
  expect(result.value).toBeGreaterThan(0);
  expect(result.fromUnit).toBe('kyatThar');
  expect(result.toUnit).toBe('gram');
});

test('massConvertor.kyatPae2Gram should convert kyat and pae to grams', () => {
  const result = massConvertor.kyatPae2Gram(5, 8);
  expect(result.value).toBeGreaterThan(0);
});

test('massConvertor.gram2KyatPae should convert grams to kyat and pae', () => {
  const [kyat, pae] = massConvertor.gram2KyatPae(100);
  expect(kyat).toBeGreaterThanOrEqual(0);
  expect(pae).toBeGreaterThanOrEqual(0);
});

// Length Converter Tests
test('lengthConvertor.metric2Burmese should convert meters to lan', () => {
  const result = lengthConvertor.metric2Burmese(1);
  expect(result.value).toBeGreaterThan(0);
  expect(result.fromUnit).toBe('meter');
  expect(result.toUnit).toBe('lan');
});

test('lengthConvertor.burmese2Metric should convert lan to meters', () => {
  const result = lengthConvertor.burmese2Metric(1);
  expect(result.value).toBeGreaterThan(0);
  expect(result.fromUnit).toBe('lan');
  expect(result.toUnit).toBe('meter');
});

// Volume Converter Tests
test('volumeConvertor.metric2Burmese should convert liters to pyi', () => {
  const result = volumeConvertor.metric2Burmese(1);
  expect(result.value).toBeGreaterThan(0);
  expect(result.fromUnit).toBe('liter');
  expect(result.toUnit).toBe('pyi');
});

test('volumeConvertor.burmese2Metric should convert pyi to liters', () => {
  const result = volumeConvertor.burmese2Metric(1);
  expect(result.value).toBeGreaterThan(0);
  expect(result.fromUnit).toBe('pyi');
  expect(result.toUnit).toBe('liter');
});

// Money Converter Tests
test('moneyConvertor.kyatPya2Decimal should convert kyat and pya to decimal', () => {
  const result = moneyConvertor.kyatPya2Decimal(5, 50);
  expect(result.value).toBe(5.5);
  expect(result.fromUnit).toBe('kyat_pya');
  expect(result.toUnit).toBe('kyat');
});

test('moneyConvertor.decimal2KyatPya should convert decimal to kyat and pya', () => {
  const [kyat, pya] = moneyConvertor.decimal2KyatPya(5.5);
  expect(kyat).toBe(5);
  expect(pya).toBe(50);
});
