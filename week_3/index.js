//node.js 기본 예제코드
const http = require('http'); //http로 서버 실행


const hostname = '127.0.0.1'; //서버 ip 설정. 127.0.0.1 : localhost
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});