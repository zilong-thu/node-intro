const http = require('http');

// Create an HTTP server
var server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(`
    <h1>Hello World</h1>
    <p>用Node自带的模块实现的一个HTTP服务器</p>
  `);
});

server.listen(3000);
console.log('http server is listening port 3000.');