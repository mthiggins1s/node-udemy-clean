const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req, res) {
    const url = req.url;
    const method = req.method;
        if(url === '/') {  // means URL will only be true if its a string and has a '/'.
            res.write('<html>');
            res.write('<head><title>Enter Message</title></head>');
            res.write('<body><form action="/message" method="POST"><input type="text"><button type="submit">Send</button></form></body>');
            res.write('</html>');
            return res.end();
        };
        if (url === '/message' && method === 'POST') {
            fs.writeFileSync('message.txt', 'DUMMY');
            res.statusCode = 302 // code 302 means "redirection"
            res.setHeader('Location', '/');
            return res.end();
        }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.JS Server!</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);