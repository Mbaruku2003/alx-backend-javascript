const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return 4 for 1 and 3', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });
  it('should return 5 for 1 and 3.7', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });
  it('return 5 for 1.2 and 3.7', () => {
    assert.strictEqual(calculateNumber(-1.2, 3.7), 3);
  });
  it('return -2 for -1.5 and 0.0', () => {
    assert.strictEqual(calculateNumber(-1.7, 0.0), -2);
  });
  it('should return 0 for 0.4 and 0.4', () => {
    assert.strictEqual(calculateNumber(0.4, 0.4), 0);
  });
  it('should return 1 for 0.6 and 0.4', () => {
    assert.strictEqual(calculateNumber(0.6, 0.4), 1);
  });
});
