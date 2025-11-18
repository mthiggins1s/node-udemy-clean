const path = require('path');
const express = require('express');
const router = express.Router(); // a router thats tied to the other express app

router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html')); // additional routes besides the root route need to be called first to make it through the middleware
});

router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/'); // this will auto-redirect the product route to the ROOT route.
});

module.exports = router;