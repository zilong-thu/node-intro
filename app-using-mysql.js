const http = require('http');
const pool = require('./modules/pool.js');

// Create an HTTP server
var server = http.createServer((req, res) => {
  console.log('请求资源：', req.url);

  res.writeHead(200, {'Content-Type': 'application/json'});
  pool.query('SELECT * FROM student')
    .then(rows => {
      console.log('内存使用：', process.memoryUsage());
      res.end(JSON.stringify({rows}));
    })
    .catch(err => {
      console.log('err: ', err);
      res.end(err);
    });
});

server.listen(3001);
console.log('http server is listening port 3001.');