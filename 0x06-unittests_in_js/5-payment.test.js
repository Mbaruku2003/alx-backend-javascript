const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let spyConsoleLog;

  beforeEach(() => {
    spyConsoleLog = sinon.spy(console, 'log');
  });
  afterEach(() => {
    spyConsoleLog.restore();
  });
  it('should log "The total is: 120" for the numbers 100 and 20', () => {
    sendPaymentRequestToApi(100, 20);
    expect(spyConsoleLog.calledOnce).to.be.true;
    expect(spyConsoleLog.calledWith('The total is: 120')).to.be.true;
  });
  it('should log "The total is: 20" for the numbers 10 and 10', () => {
    sendPaymentRequestToApi(10, 10);
    expect(spyConsoleLog.calledOnce).to.be.true;
    expect(spyConsoleLog.calledWith('The total is: 20')).to.be.true;
  });
});
