const http = require('http');
const server=http.createServer((req, res) => {
  if (req.url === '/about') {
    return res.end('this page is about page');
  }
  if (req.url === '/profile') {
    return res.end('this page is profile page');
  }
  if (req.url === '/contact') {
    return res.end('this page is contact page');
  }
  return res.end('hello from the server');
});

server.listen(3000);
console.log('server is running')