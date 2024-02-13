const express = require('express');
const router = express.Router();
// const path = require('path');
// const root = require('../util/path');
const adminController = require('../controllers/admin');

router.get('/add-product', adminController.addAddProduct);

router.get('/admin-products', adminController.getAddProducts);

router.post('/add-product', adminController.postAddProduct);

module.exports = router;
