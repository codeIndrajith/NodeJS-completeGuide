const express = require('express');
const path = require('path');
const router = express.Router();
const root = require('../util/path');

router.get('/', (req, res, next) => {
  res.sendFile(path.join(root, 'view', 'shop.html'));
});

module.exports = router;
