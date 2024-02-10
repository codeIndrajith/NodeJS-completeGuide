const product = [];

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  // save the data
  save() {
    product.push(this);
  }

  // Fetch the data
  static fetchAll() {
    return product;
  }
};
