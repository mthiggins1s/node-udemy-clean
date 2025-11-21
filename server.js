const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
// app needs to be defined BEFORE the server call.
const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes =  require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false})); // registers a middleware function that will call 'end' and will auto parse our body that is sent through the form
app.use(express.static(path.join(__dirname, 'public'))); // serves static files
app.use('/admin', adminData.routes); // importing adminRoutes from the admin.js file
app.use(shopRoutes); // importing shopRoutes from the shop.js file

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000, () => {
  console.log('🚀 Server is RUNNING!');
});