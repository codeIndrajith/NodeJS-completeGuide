const path = require('path');
const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts = (req, res, next) => {
  Product.fetchAll((product) => {
    res.render('shop/product-list', {
      prods: product,
      PageTitle: 'All Products',
      path: '/products',
    });
  });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productID;
  Product.findById(prodId, (product) => {
    res.render('shop/product-details', {
      product: product,
      path: '/products',
      PageTitle: product.title,
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
  Cart.getCart((cart) => {
    Product.fetchAll((products) => {
      const cartProducts = [];

      for (product of products) {
        const cartProductsData = cart.products.find(
          (prod) => prod.id === product.id
        );
        if (cartProductsData) {
          cartProducts.push({
            productData: product,
            qty: cartProductsData.qty,
          });
        }
      }
      res.render('shop/cart', {
        path: '/cart',
        PageTitle: 'Your Cart',
        products: cartProducts,
      });
    });
  });
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, (product) => {
    Cart.deleteProduct(prodId, product.price);
    res.redirect('/cart');
  });
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, (product) => {
    Cart.addProduct(prodId, product.price);
  });
  res.redirect('/cart');
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
