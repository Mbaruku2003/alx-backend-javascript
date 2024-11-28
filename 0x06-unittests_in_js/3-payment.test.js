const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('SendPaymentRequestToApi', () => {
  let spyCalculateNumber;
  let spyConsoleLog;

  beforeEach(() => {
    spyCalculateNumber = sinon.spy(Utils, 'calculateNumber');
    spyConsoleLog = sinon.spy(console, 'log');
  });
  afterEach(() => {
    spyCalculateNumber.restore();
    spyConsoleLog.restore();
  });
  it('should call Utils.calculateNumber with SUM, 100 and 20', () => {
    sendPaymentRequestToApi(100, 20);
    expect(spyCalculateNumber.calledOnce).to.be.true;
    expect(spyCalculateNumber.calledWith('SUM', 100, 20)).to.be.true;
  });
  it('should log the correct message to the console', () => {
    sendPaymentRequestToApi(100, 20);
    expect(spyConsoleLog.calledOnce).to.be.true;
    expect(spyConsoleLog.calledWith('The total is: 120')).to.be.true;
  });
});
