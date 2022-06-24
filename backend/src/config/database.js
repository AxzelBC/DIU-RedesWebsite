//PERMITE CONEXION A BASE DE DATOS

const myql2 = require('mysql2');

const database = myql2.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'lascilabdb',
});

module.exports = database;