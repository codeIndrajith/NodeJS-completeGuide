const express = require('express');
const router = express.Router();
const path = require('path');
const root = require('../util/path');

const product = [];

router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(root, 'view', 'add-product.html'));
});

router.post('/add-product', (req, res) => {
  product.push({ title: req.body.title });
  res.redirect('/');
});

exports.routes = router;
exports.products = product;
