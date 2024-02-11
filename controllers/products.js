const path = require('path');
const Product = require('../models/product');

exports.addAddProduct = (req, res, next) => {
  // res.sendFile(path.join(root, 'view', 'add-product.html'));
  res.render('admin/add-product', {
    PageTitle: 'Add Product',
    path: '/add-product',
  });
};

exports.postAddProduct = (req, res) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((product) => {
    res.render('shop/product-list', {
      prods: product,
      PageTitle: 'Shop',
      path: '/',
      hasProduct: product.length > 0,
    });
  });
};
