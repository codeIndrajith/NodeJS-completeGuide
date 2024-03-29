const path = require('path');
const Product = require('../models/product');
const { where } = require('sequelize');

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

  // const product = new Product(null, title, imageUrl, price, description);
  // product
  //   .save()
  //   .then(() => {
  //     res.redirect('/');
  //   })
  //   .catch((err) => console.log(err));
  req.user
    .createProduct({
      title: title,
      price: price,
      imageUrl: imageUrl,
      description: description,
    })
    .then((result) => {
      res.redirect('/');
    })
    .catch((err) => console.log(err));
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  req.user
    .getProducts({ where: { id: prodId } })
    // Product.findByPk(prodId)
    .then((products) => {
      const product = products[0];
      if (!product) {
        return res.redirect('/');
      }
      res.render('admin/edit-product', {
        PageTitle: 'Edit Product',
        path: '/edit-product',
        editing: editMode,
        product: product,
      });
    })
    .catch((err) => console.log(err));
};

exports.postEditProduct = (req, res, next) => {
  // What user want update the products.
  const prodId = req.body.productId;

  // Get the user update new values
  const updatedTitle = req.body.title;
  const updatedImageUrl = req.body.imageUrl;
  const updatedPrice = req.body.price;
  const updatedDescription = req.body.description;

  // Update the product local in our application. So finally save the product in database

  Product.findByPk(prodId)
    .then((product) => {
      product.title = updatedTitle;
      product.price = updatedPrice;
      product.imageUrl = updatedImageUrl;
      product.description = updatedDescription;
      return product.save();
    })
    .then((result) => {
      console.log('Updated Product');
      res.redirect('/admin-products');
    })
    .catch((err) => console.log(err));
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.destroy({
    where: {
      id: prodId,
    },
  })
    .then((result) => {
      console.log('Delete Products');
      res.redirect('/admin-products');
    })
    .catch((err) => console.log(err));
};

exports.getProducts = (req, res, next) => {
  req.user
    .getProducts()
    .then((products) => {
      res.render('admin/products', {
        prods: products,
        PageTitle: 'Admin Products',
        path: '/admin-products',
      });
    })
    .catch((err) => console.log(err));
};
