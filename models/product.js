const db = require('../util/database.js');
const Cart = require('../models/cart.js');

const products = [];

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  // save the data
  save() {
    return db.execute(
      `INSERT INTO products (title , price , description , imageUrl) VALUES (?, ?, ?, ?)`,
      [this.title, this.price, this.description, this.imageUrl]
    );
  }

  // Delete the product
  static deleteById(id) {}

  // Fetch the data
  static fetchAll() {
    return db.execute('SELECT * FROM products');
  }

  // compare the p location item id equals to param id
  static findById(id) {}
};
