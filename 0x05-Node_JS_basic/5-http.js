const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    const databasePath = process.argv[2];
    if (!databasePath) {
      res.end('This is the list of our students\nCannot load the database');
      return;
    }
    res.write('This is the list of our students\n');
    countStudents(databasePath)
      .then(() => {
        res.end();
      })
      .catch((error) => {
        res.end(error.message);
      });
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found');
  }
});
app.listen(1245, () => {
  console.log('Server is running on port 1245');
});
module.exports = app;
