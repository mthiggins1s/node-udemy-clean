const path = require('path');
const express = require('express');
const router = express.Router();
const rootDir = require('../utilities/path'); // this will inject path from utilities

router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html')); // holds the ABSOLUTE path in our filesystem
});

module.exports = router;