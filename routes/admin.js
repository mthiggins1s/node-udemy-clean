const path = require('path');
const express = require('express');
const router = express.Router(); // a router thats tied to the other express app
const rootDir = require('../utilities/path'); // this will inject path from utilities

const products = [];

router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html')); // additional routes besides the root route need to be called first to make it through the middleware
});

router.post('/add-product', (req, res, next) => {
    products.push({title: req.body.title});
    res.redirect('/'); // this will auto-redirect the product route to the ROOT route.
});

exports.routes = router;
exports.products = products;