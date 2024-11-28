const Utils = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const amount = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${amount}`);
};
module.exports = sendPaymentRequestToApi;
