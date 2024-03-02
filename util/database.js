// // Manual connection in database
// const mysql = require('mysql2');

// const pool = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   database: 'nodejsCourse',
//   password: '',
// });

// module.exports = pool.promise();

// using the sequelize to connect the database

const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodejsCourse', 'root', '', {
  dialect: 'mysql',
  host: 'localhost',
});

module.exports = sequelize;
