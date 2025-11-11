const fs = require('fs');

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    // means URL will only be true if it's a string and has a '/'.
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
  }

  if (url === '/message' && method === 'POST') {
    const body = []; // we will try to read the BODY of the REQUEST
    req.on('data', (chunk) => {
      // allows us to listen to certain events (data event will be fired when a new chunk is ready to be read.)
      console.log(chunk);
      body.push(chunk); // we change the object BEHIND the body object (the data INSIDE the object)
    });
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString(); // creates a new BUFFER and adds all the chunks from inside the BODY into it.
      const message = parsedBody.split('=')[1];
      fs.writeFile('message.txt', message, err => {
        res.statusCode = 302; // code 302 means "redirection"
        res.setHeader('Location', '/');
        return res.end();
      });
    });
  }

  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title></head>');
  res.write('<body><h1>Hello from my Node.JS Server!</h1></body>');
  res.write('</html>');
  res.end();
};

module.exports = {
  handler: requestHandler,
  someText: 'some hard-coded text here'
};