const db = require('./db');

module.exports = {

  async registerUser(userObject) {
    const { email, password, name, surname, age } = userObject;
    const sql = 'INSERT INTO users (lastname, firstname, email, age, password) VALUES ($1, $2, $3, $4, $5) RETURNING id';
    const { rows } = await db.query(sql, [surname, name, email, age, password]);
    return rows[0].id;
  },

  async checkUniqueEmail(email) {
    const sql = 'SELECT * from users WHERE email=$1';
    const { rows } = await db.query(sql, [email]);
    return rows.length < 1;
  }
};
