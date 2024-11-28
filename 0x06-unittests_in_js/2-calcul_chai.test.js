const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('Sum operation', () => {
    it('rturns the sum of rounded a and b', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
    it('returns the sum of rounded a + b', () => {
      expect(calculateNumber('SUM', -1.4, 4.5)).to.equal(4);
    });
  });
  describe('substraction operation', () => {
    it('returns the subtraction of b from a', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
    it('returns the subtraction of b from a', () => {
      expect(calculateNumber('SUBTRACT', -1.4, 4.5)).to.equal(-6);
    });
  describe('division of numbers', () => {
    it('divides a from b', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });
    it('should return Error for divide with 1.4 and 0', ()  => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
    it('should return Error for divide with 0 and 0', () => {
      expect(calculateNumber('DIVIDE', 0,  0)).to.equal('Error');
    });
  });
  });
});
