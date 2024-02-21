const path = require('path');
const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  // res.sendFile(path.join(root, 'view', 'add-product.html'));
  res.render('admin/edit-product', {
    PageTitle: 'Add Product',
    path: '/add-product',
    editing: false,
  });
};

exports.postAddProduct = (req, res) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;

  const product = new Product(null, title, imageUrl, price, description);
  product.save();
  res.redirect('/');
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  Product.findById(prodId, (product) => {
    if (!product) {
      return res.redirect('/');
    }
    res.render('admin/edit-product', {
      PageTitle: 'Edit Product',
      path: '/edit-product',
      editing: editMode,
      product: product,
    });
  });
};

exports.postEditProduct = (req, res, next) => {
  // What user want update the products.
  const prodId = req.body.productId;

  // Get the user update new values
  const updatedTitle = req.body.title;
  const updatedImageUrl = req.body.imageUrl;
  const updatedPrice = req.body.price;
  const updatedDescription = req.body.description;

  // Create a update products
  const updatedProduct = new Product(
    prodId,
    updatedTitle,
    updatedImageUrl,
    updatedPrice,
    updatedDescription
  );

  // Save the updatedProduct
  updatedProduct.save();

  // Redirect
  res.redirect('/admin-products');
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
