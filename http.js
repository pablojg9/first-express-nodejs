const http = require('http');


http.createServer((req, res) => {
    res.end('hello, World');

}).listen(3000);



console.log('O servidor está rodando');

