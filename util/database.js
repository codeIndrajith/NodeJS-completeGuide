const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'nodejsCourse',
  password: '',
});

module.exports = pool;
