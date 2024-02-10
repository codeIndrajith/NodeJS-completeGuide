const product = [];
const path = require('path');

exports.addAddProduct = (req, res, next) => {
  // res.sendFile(path.join(root, 'view', 'add-product.html'));
  res.render('add-product', { PageTitle: 'Add Product', path: '/add-product' });
};

exports.postAddProduct = (req, res) => {
  product.push({ title: req.body.title });
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  res.render('shop', {
    prods: product,
    PageTitle: 'Shop',
    path: '/',
    hasProduct: product.length > 0,
  });
};
