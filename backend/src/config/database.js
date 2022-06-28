//PERMITE CONEXION A BASE DE DATOS

const mysql2 = require('mysql2');

const database = mysql2.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'lascilabdb',
});

module.exports = database;