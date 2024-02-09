const express = require('express');
const path = require('path');
const router = express.Router();
const root = require('../util/path');
const adminData = require('./admin');

router.get('/', (req, res, next) => {
  const product = adminData.products;
  res.render('shop', {
    prods: product,
    PageTitle: 'Shop',
    path: '/',
    hasProduct: product.length > 0,
  });
});

module.exports = router;
