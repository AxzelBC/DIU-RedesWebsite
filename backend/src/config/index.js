const app = require('./app'); 
const database = require('./database');


//ENCARGADO DE HACER LA CONEXION DEL SERVIDOR Y DE
const main = () => {
    database.connect((err) => {
      if (err) throw err;
      console.log('Base de datos conectada');
    });
  
    app.listen(process.env.PORT || 3000, () => {
      console.log('Servidor escuchando puerto 3000');
    });
  };
  
  main();
 

