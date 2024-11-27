const assert = require('assert');
const { it, describe } = require("mocha");
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return 4 for 1 and 3', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });
  it('should return 5 for 1 and 3.7', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });
  it('returns 5 for 1.2 and 3.7', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });
  it('givs ut 6 for 1.5 and 3.7', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
});
