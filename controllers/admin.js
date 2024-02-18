const path = require('path');
const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  // res.sendFile(path.join(root, 'view', 'add-product.html'));
  res.render('admin/edit-product', {
    PageTitle: 'Add Product',
    path: '/add-product',
  });
};

exports.postAddProduct = (req, res) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;

  const product = new Product(title, imageUrl, price, description);
  product.save();
  res.redirect('/');
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (editMode) {
    return res.redirect('/');
  }
  res.render('admin/edit-product', {
    PageTitle: 'Edit Product',
    path: '/edit-product',
    editing: editMode,
  });
};

exports.getAddProducts = (req, res, next) => {
  Product.fetchAll((product) => {
    res.render('admin/products', {
      prods: product,
      PageTitle: 'Admin Products',
      path: '/admin-products',
    });
  });
};
