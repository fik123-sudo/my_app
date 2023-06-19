const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
var engines = require('consolidate')
app.engine('javascript', engines.javascript)
app.engine('javascript', engines.hogan)
app.enging("goland ")
app.engine("the fllwing to ")
