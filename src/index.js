'use strict';

require('dotenv')
    .config();

const db = require('./db');

const exapmleQuery = async (idUser) => {
  const sql = `SELECT * FROM user WHERE idUser = ?`;
  try {
    const data = await db.query(sql, [idUser]);
    return data[0];
  } catch (err) {
    console.dir(err);
  }
  return;
};

(async () => {
  const data = await exapmleQuery(1);
  console.dir(data);
  await db.end();
})();

