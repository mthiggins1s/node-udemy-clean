const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes =  require('./routes/shop');
// app needs to be defined BEFORE the server call.
const app = express();

app.use(bodyParser.urlencoded({extended: false})); // registers a middleware function that will call 'end' and will auto parse our body that is sent through the form
app.use(adminRoutes); // importing adminRoutes from the admin.js file
app.use(shopRoutes); // importing shopRoutes from the shop.js file

app.use((req, res, next) => {
    res.status(404).send('<h1>Page Not Found!</h1>');
});

app.listen(3000, () => {
  console.log('🚀 Server is RUNNING!');
});