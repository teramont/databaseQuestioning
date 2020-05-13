'use strict';

const {createPool} = require('mysql2');

  const db = createPool({
    connectionLimit: 3,
    host: 'localhost',
    user: 'root',
    database: 'survey',
    password: 'SQL_server_pass',
  }).promise();

module.exports = db;
