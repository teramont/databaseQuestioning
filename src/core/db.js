'use strict';

const db = require('./config');

class Table{
  constructor(table){
    this.table = table;
  }
  async show () {
    const sql = `SELECT table_name, table_rows 
    FROM INFORMATION_SCHEMA.TABLES`;
    try {
      const data = await db.query(sql);
      return data[0];
    } catch (err) {
      console.dir(err);
    }
    return this;
  }
  async select (limit) {
    const sql1 = `SELECT * FROM ${this.table}
    LIMIT ${limit}`;
    const sql2 = `SELECT * FROM ${this.table}`;
    try {
      if(limit !== undefined){
        const data = await db.query(sql1);
        return data[0];
      }
      else {
        const data = await db.query(sql2);
        return data[0];
      }
    } catch(err){
      console.dir(err);
    }
    return this;
  }
  async where(field, value) {
    const sql = `SELECT * FROM ${this.table} WHERE ${field} = ?`;
    try {
      const data = await db.query(sql, [value]);
      return data[0];
    } catch (err) {
      console.dir(err);
    }
    return this;
  }
  async join(table, field) {
    const sql = `SELECT * FROM ${this.table}
    JOIN ${table} ON ${table}.${field} = ${this.table}.${field}`;
    try {
      const data = await db.query(sql);
      return data[0];
    } catch (err) {
      console.dir(err);
    }
    return this;
  }
  async order(field){
    const sql = `SELECT * FROM ${this.table}
    ORDER BY ${field} DESC`;
    try {
      const data = await db.query(sql);
      return data[0];
    } catch (err) {
      console.dir(err);
    }
    return this;
  }
};

module.exports = Table;


