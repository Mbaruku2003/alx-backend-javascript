const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('Sum operation', () => {
    it('rturns the sum of rounded a and b', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });
    it('returns the sum of rounded a + b', () => {
      assert.strictEqual(calculateNumber('SUM', -1.4, 4.5), 4);
    });
  });
  describe('substraction operation', () => {
    it('returns the subtraction of b from a', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
    it('returns the subtraction of b from a', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -1.4, 4.5), -6);
    });
  describe('division of numbers', () => {
    it('divides a from b', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });
    it('should return Error for divide with 1.4 and 0', ()  => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
    it('should return Error for divide with 0 and 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0,  0), 'Error');
    });
  });
  });
});
