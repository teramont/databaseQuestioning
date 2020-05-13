'use strict';

const {createPool} = require('mysql2');

const {DB_HOST, DB_POOL_SIZE,
  DB_USER, DB_NAME, DB_PASS} = process.env;

const db = createPool({
  connectionLimit: DB_POOL_SIZE,
  host: DB_HOST,
  user: DB_USER,
  database: DB_NAME,
  password: DB_PASS,
}).promise();

module.exports = db;