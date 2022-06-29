const database = require('../config/database');
const mysql2 = require('mysql2');
const session = require('express-session');


// ========= SELECT DE DATOS ===========
const testUsuario = (req, res) => {
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

const loginUsuario = (req, res) => {

    const { codigo, contraseña } = req.body
    const createQuery = `SELECT * FROM users WHERE codigo_estudiante = ? `;
    const query = mysql2.format(createQuery, [codigo]);

    database.query(query, (err, result) => {
        if (err) throw err;
        // console.log(result);
        res.send({ message: 'Usuario creado' });
    });
};


const registroDatosUsuario = (req, res) => {
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
const registroUsuario = (req, res) => {
    const { codigo, contraseña } = req.body;
    const createQuery = `INSERT INTO usuarios(codigo_estudiante,contrasenia) VALUE(?, ?)`;
    const query = mysql2.format(createQuery, [codigo, contraseña]);

    database.query(query, (err, result) => {
        if (err) throw err;
        // console.log(result);
        res.send({ message: 'Usuario creado' });
    });
};


/*
Un middleware de autenticación y autorización que sólo permite ejecutar el paso siguiente si el usuario es sanabria 
y tiene permisos de administrador se puede hacer de la siguiente manera:

var auth = function(req, res, next) {
  if (req.session && req.session.user === "sanabria" && req.session.admin)
    return next();
  else
    return res.sendStatus(401);
};
*/



/*

Funcion para peticion get
const validarAdmin (req, res) {
    if (!req.query.codigo - estudiante || !req.query.password) {
        res.send('login failed');
    } else if (req.query.username === "sanabria" || req.query.contrasenia === "paswordDeSanabriaJAJA") {
        req.session.user = "sanabria";
        req.session.admin = true;
    }
});

*/

/*
Al llegar el final de la sesión, se destruye la sesión.

app.get('/logout', function (req, res) {
  req.session.destroy();
});
Para llegar a la ruta content necesitamos tener permisos de administrador:

app.get('/content', auth, function (req, res) {
    res.send("You can only see this after you've logged in.");
});

*/

module.exports = {
    testUsuario,
    loginUsuario,
    registroDatosUsuario,
    registroUsuario

}