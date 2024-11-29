const request = require('request');
const { expect } = require('chai');

const BASE_URL = 'http://localhost:7865';

describe('API intergration tests', () => {
  describe('Root endpoint', () => {
    it('should return status code 200', (done) => {
      request.get(`${BASE_URL}/`, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
    it('should return the correct message', (done) => {
      request.get(`${BASE_URL}/`, (error, response, body) => {
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    })
  });
  describe('should return the correct message', () => {
    it('should return the correct message', (done) => {
      request.get(`${BASE_URL}/cart/12`, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
    it('should return the correct message when  :id is a number', (done) => {
      request.get(`${BASE_URL}/cart/12`, (error, response, body) => {
        expect(body).to.equal('Payment methods for cart 12');
        done();
      });
    });
    it('should return status code 404 for an invalid route', (done) => {
      request.get(`${BASE_URL}/cart/hello`, (error, response, body) => {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
    it('should return status code 404 for  an invalid  route', (done) => {
      request.get(`${BASE_URL}/invalid-route`, (error, response, body) => {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });
  describe('Available payment endpoints', () => {
    it('should return status code 200', (done) => {
      request.get(`${BASE_URL}/available_payments`, (error,response, body) => {
        const expectedResponse = {
          payment_methods: {
            credit_cards: true,
            paypal: false,
	  },
	};
        expect(JSON.parse(body)).to.deep.equal(expectedResponse);
        done();
      });
    });
  });
});
