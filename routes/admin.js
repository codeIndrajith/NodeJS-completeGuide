const express = require('express');
const router = express.Router();
// const path = require('path');
// const root = require('../util/path');
const adminController = require('../controllers/admin');

router.get('/add-product', adminController.getAddProduct);

router.get('/admin-products', adminController.getProducts);

router.get('/edit-product/:productId', adminController.getEditProduct);

router.post('/add-product', adminController.postAddProduct);

router.post('/edit-product', adminController.postEditProduct);

router.post('/delete-product', adminController.postDeleteProduct);

module.exports = router;
