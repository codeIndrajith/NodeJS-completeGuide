const express = require('express');
const router = express.Router();
const path = require('path');
const root = require('../util/path');

router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(root, 'view', 'add-product.html'));
});

router.post('/add-product', (req, res) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
