'use strict'
const Table = require('./db.js');

const user = new Table('User');

(async() => {
  const info = await user.show();
  const read = await user.where('idUser', 1);
  const join = await user.join('Session', 'idUser');
  const order = await user.order('age');
  const select = await user.select(2);
  
  console.table(info);
  console.table(read);
  console.table(join);
  console.table(order);
  console.table(select);
})()

const session = new Table('Session');

(async() => {
  const info = await session.show();
  const read = await session.where('start', '6330-01-01');
  const join = await session.join('User', 'idUser');
  const order = await session.order('start');
  const select = await session.select();
  
  console.table(info);
  console.table(read);
  console.table(join);
  console.table(order);
  console.table(select);
})()