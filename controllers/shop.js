const path = require('path');
const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  Product.fetchAll((product) => {
    res.render('shop/product-list', {
      prods: product,
      PageTitle: 'All Products',
      path: '/products',
    });
  });
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll((product) => {
    res.render('shop/index', {
      prods: product,
      PageTitle: 'Shop',
      path: '/',
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    PageTitle: 'Your Cart',
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    PageTitle: 'Checkout',
  });
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    PageTitle: 'Order Products',
  });
};
