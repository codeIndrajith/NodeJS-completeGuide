const fs = require('fs');
const path = require('path');

const products = [];
const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);

// Helper function to create we need to clean code
const getProductsFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  // save the data
  save() {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  // Fetch the data
  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
