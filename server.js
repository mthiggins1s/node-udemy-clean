const http = require('http');
const routes = require('./routes');
console.log(routes.someText);

// tells node to execute the function stored in routes for incoming requests.
const server = http.createServer(routes.handler);

server.listen(3000, () => {
  console.log('🚀 Server is running at http://localhost:3000');
});