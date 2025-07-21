const { exchangeUnit, validateNumber, validateNumberArray, formatNumber, roundToDecimals } =
  require('../dist/index').helpers;

// exchangeUnit tests
test('exchangeUnit should swap from and to units', () => {
  const setting = { decimal: 2, from: 'meter', to: 'lan', format: {} };
  const result = exchangeUnit(setting);
  expect(result.from).toBe('lan');
  expect(result.to).toBe('meter');
  expect(result.decimal).toBe(2);
});

// validateNumber tests
test('validateNumber should not throw for valid numbers', () => {
  expect(() => validateNumber(5)).not.toThrow();
  expect(() => validateNumber(0)).not.toThrow();
  expect(() => validateNumber(-10.5)).not.toThrow();
});

test('validateNumber should throw for non-numbers', () => {
  expect(() => validateNumber('not a number')).toThrow();
  expect(() => validateNumber(NaN)).toThrow();
});

// validateNumberArray tests
test('validateNumberArray should not throw for valid number arrays', () => {
  expect(() => validateNumberArray([1, 2, 3])).not.toThrow();
  expect(() => validateNumberArray([])).not.toThrow();
});

test('validateNumberArray should throw for arrays with non-numbers', () => {
  expect(() => validateNumberArray([1, 'two', 3])).toThrow();
});

// formatNumber tests
test('formatNumber should format number without unit', () => {
  const result = formatNumber(123.456);
  expect(result).toBe('123.456');
});

test('formatNumber should format number with unit', () => {
  const result = formatNumber(123.456, 'kg');
  expect(result).toBe('123.456 kg');
});

// roundToDecimals tests
test('roundToDecimals should round to specified decimal places', () => {
  expect(roundToDecimals(123.4567, 2)).toBe(123.46);
  expect(roundToDecimals(123.4567, 0)).toBe(123);
  expect(roundToDecimals(123.4567, 3)).toBe(123.457);
});
