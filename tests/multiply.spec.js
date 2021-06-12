const { multiply } = require('./../calculator.js');

describe('Multiply', () => {
  // Our tests will be added here.

  test('value returned should be the result of the multiplication of both values', () => {
    const result = multiply(1, 2);
    expect(result).toBe(2);
  });

  test('value returned should be a negative number', () => {
    const result = multiply(-1, 2);
    expect(result).toBe(-2);
  });

  test('value returned should be 0', () => {
    const result = multiply(1, 0);
    expect(result).toBe(0);
  });
});
