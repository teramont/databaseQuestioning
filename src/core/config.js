'use strict';

const {createPool} = require('mysql2');

  const db = createPool({
    connectionLimit: 3,
    host: 'localhost',
    user: 'root',
    database: 'survey',
    password: '30062001',
  }).promise();

module.exports = db;
