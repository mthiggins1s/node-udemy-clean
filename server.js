const http = require('http');
const express = require('express');

// app needs to be defined BEFORE the server call.
const app = express();
// accepts an array of request handlers
app.use((req, res, next) => {
    console.log('inside the middleware!');
    next(); // we call 'next' here so the middleware can travel to the next request!
});
app.use((req, res, next) => {
    console.log('inside another middleware!');
    res.send('<h1>Hello from Express!</h1>'); // allows us to attach a 'body' to the middleware!
});

app.listen(3000, () => {
  console.log('🚀 Server is RUNNING!');
});