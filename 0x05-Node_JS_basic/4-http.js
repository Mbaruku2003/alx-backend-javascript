const http = require('http');
/**
 * create a simple Http server that respondswith string
 * for any end point
 */
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School')
});
app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

module.exports = app;
