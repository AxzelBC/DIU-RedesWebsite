const database = require('../config/database');
const mysql2 = require('mysql2');


// ========= SELECT DE DATOS ===========
const testUsuario = (req,res)=>{
    const { id } = req.params;

    const readQuery = `SELECT * FROM usuarios WHERE id_usuario=?;`;
  
    const query = mysql2.format(readQuery, [id]);
    
    database.query(query, (err, result) => {
        if (err) throw err;
    if (result[0] !== undefined) {
      res.json(result[0]);
    } else {
      res.json({ message: 'Usuario no encontrado' });
    }
  });
};

// const testUsuario = (req,res)=>{
//     const { id } = req.params;
//     const query =`SELECT * FROM usuarios WHERE id_usuario=3;`;

//     database.query(query, (err, result) => {
//         if(err) throw err;
//         console.log(result);
//     });
// };

// ========= REGISTRO DE USUARIOS ===========

const loginUsuario = (req,res)=>{

        const {codigo, contraseña} = req.body
        const createQuery =`SELECT * FROM users WHERE codigo_estudiante = ? `;
        const query = mysql2.format(createQuery, [codigo]);

        database.query(query, (err, result) => {
            if (err) throw err;
            // console.log(result);
            res.send({ message: 'Usuario creado' });
          });
        };


const registroDatosUsuario = (req,res)=>{
    const { pais, codigo, universidad, programa } = req.body;
    const createQuery = `INSERT INTO datos_personales_usuarios(pais,codigo_convenio,universidad,programa) VALUE(?, ?, ?, ?)`;
    const query = mysql2.format(createQuery, [pais, codigo, universidad, programa]);

    database.query(query, (err, result) => {
        if (err) throw err;
        // console.log(result);
        res.send({ message: 'Usuario creado' });
      });
    };

    //METODO QUE SOLO HARA USO EL ADMIN
const registroUsuario = (req,res)=>{
    const {codigo, contraseña } = req.body;
    const createQuery = `INSERT INTO usuarios(codigo_estudiante,contrasenia) VALUE(?, ?)`;
    const query = mysql2.format(createQuery, [codigo, contraseña]);
    
    database.query(query, (err, result) => {
        if (err) throw err;
        // console.log(result);
        res.send({ message: 'Usuario creado' });
      });
    };


module.exports ={
    testUsuario,
    loginUsuario,
    registroDatosUsuario,
    registroUsuario

}