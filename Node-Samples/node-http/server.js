const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('<h1>Hello World</h1>');
    }
    if (req.url === '/500') {
        res.writeHead(500, 'Internal Server Error');
    }
    res.end();
});

server.listen(8080);
console.log('Server Running on Port 8080');