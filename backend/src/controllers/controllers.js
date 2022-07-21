const database = require('../config/database');
const mysql2 = require('mysql2');
const jwt = require('jsonwebtoken');
const session = require('express-session');
const bcryptjs = require('bcryptjs');
const {promisify} = require('util');


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

const registroDatosUsuario = async (req, res) => {

   
    
    //console.log(codigo_usuario+" - "+nombre +" - "+apellido+" - "+correo+" - "+programa+" - "+cargo+" - "+tipo_usuario);

    const { codigo_usuario , nombre , apellido , correo, programa , cargo , tipo_usuario, password} = req.body;
    //let passHash = await bcryptjs.hash(contrasenia,8);

    const createQuery = `INSERT INTO datos_personales_usuarios(codigo_usuario,nombre,apellido,
        correo, programa , cargo , tipo_usuario,password)  VALUE(?, ?, ?, ?, ?, ?, ?, ?)`;
    const query = await mysql2.format(createQuery, [codigo_usuario , nombre , apellido , correo, programa , cargo , tipo_usuario,password]);
    
/*
    const createQueryUser = `INSERT INTO usuarios(codigo_estudiante,contrasenia)  VALUES (?, ?)`;
    const queryUser = await mysql2.format(createQueryUser, [codigo_usuario, passHash])
*/
    
    database.query(query, (err, result) => {
        if (err) res.send('Ocurrió un error');
        // console.log(result); 
        res.send({ message: 'Datos de usuario creados' });
    }
    
    
    );  

    
   /*
    database.query(queryUser, (err, result) => {
        if (err) throw err;
        // console.log(result);
        res.send({ message: 'Usuario creado' });
    }
    
    );   */

};

const registroUsuario = async (req, res) => {
  
  
    const { codigo, password ,  estado} = req.body;
//let passHash = await bcryptjs.hash(password,8);

    const createQuery = `INSERT INTO usuarios(codigo,password, estado) VALUE(?, ?, ?)`;
    const query = mysql2.format(createQuery, [codigo, password, estado]);
    
    database.query(query, (err, result) => {
        if (err) res.send({ message: 'No fue posible registrar el usuario. Verifique que el codigo haga parte de la solicitud.' });
        //throw err;
        // console.log(result);
        res.send({ message: 'Usuario creado' });
    });
};

const rutaPrincipal= (req, res)=>{

    res.send('Hola Mundo');
};

const rutaP= (req, res)=>{

    res.send('Hola Mundo');
};


const loginUsuario = async (req, res) => {  

    const { codigo, password } = req.body


    if (!codigo || !password) {

        res.render('login', {
            alert: true,
            alertTitle: "Advertencia",
            alertMessage: "Ingrese un usuario y paswword",
            alertIcon: 'info',
            showConfirmButton: true,
            ruta: 'login'
        }
        )
        res.json({ message: 'Digite usuario y contraseña' })


    } else {
        const readQuery = `SELECT * FROM usuarios WHERE codigo=?;`;
        const query = mysql2.format(readQuery, [codigo]);

        database.query(query, (err, result) => {

            if (err) throw console.log("error al buscar la información en la base de datos");
            if (result.length == 0 || !(password == result[0].password)) {
                res.render('login', {
                    alert: true,
                    alertTitle: "Advertencia",
                    alertMessage: "Ingrese un usuario y paswword válidos",
                    alertIcon: 'info',
                    showConfirmButton: true,
                    ruta: 'login'
                }
                )
                res.json({ message: 'usuario y contraseña incorrectos!' })



            } else {
                /*
                const id = result[0].id_usuario
                const token = jwt.sign({ id: id }, process.env.JWT_SECRETO, {
                    expiresIn: process.env.JWT_TIEMPO_EXPIRA
                })
                  console.log("TOKEN: "+token+" para el usuario con codigo: "+codigo)

                  const cookieOptions = {
                    expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
                    httpOnly: true
                }

                res.cookie('jwt', token, cookieOptions)
                  */
                res.render('login', {
                    alert: true,
                    alertTitle: "Conexión exitosa",
                    alertMessage: "LOGIN CORRECTO!",
                    alertIcon: 'success',
                    showConfirmButton: false,
                    timer: 800, 
                    ruta: ''
                })
                res.json({message: "¡inicio de sesion exitosa!"})

            }
        })

  /*
    if(codigo_estudiante == "333628" && contrasenia=="adminlascilab2022"){
    
    res.render('dashboard',{
     alert:true,
     alertTitle: "Advertencia",
     alertMessage: "Ingrese un usuario y paswword",
     alertIcon: 'info',
     showConfirmButton: true,
     ruta: 'login'
     }
     )
     res.json({message: 'Bienvenido sanabria'})
     
    res.send({message: "Bienvenido sanaGod"});
    } else{

        res.send({message: "Ingrese usuario y password válidos!"});
    }  
   */



    }

    


//metodo para verificar si un usuario está autenticado, es decir si hay una sesion activa

/*
const authenticarUser = async (req, res)=>{
if(req.cookieOptions.jwt){
try {
    const decodificada = await promisify(jwt.verify)(req.cookieOptions.jwt, process.env.JWT_SECRETO)
    mysql2.query('SELECT FROM usuarios WHERE id_usuario =?', [decodificada.id], (error, result)=>{
    if(!result){return next()}
        req.codigo = result[0]
        return next()
    })
} catch (error) {
    console.log(error)
    return next()
}

}else{
    res.redirect('/login')
}



}

const logout = async (req, res)=>{
//eliminamos la cookie y nos redirigimos a la ruta principal
res.clearCookie('jwt')
res.redirect('/')

}

*/ 

}


const crearArticulo = async (req , res)=>{
    const {autores, link, resumen, titulo} = req.body
     
    const createQuery = `INSERT INTO articulos(autores, link, resumen, titulo) VALUE(?, ?, ?, ?)`;
     const query = await mysql2.format(createQuery, [autores, link, resumen, titulo]);
     
     database.query(query, (err, result) => {
         if (err) res.send({ message: 'Error del administrador al crear un artículo'});
         //throw err;
         // console.log(result);
         res.send({ message: '¡Artículo creado con éxito!' });
     });
 
     }
     
     const editarArticulo = async (req,res)=>{
 
         const {id_articulo} = req.params.id_articulo;
         const {autores, link, resumen, titulo} = req.body


         const createQuery =`UPDATE articulos
         SET ? WHERE id_articulo=?`;


        const query= await mysql2.format(createQuery,  [req.body, id_articulo] );


         database.query(query,(err, result) => {
         if (err) {res.send({ message: 'error al tratar de comunicarse con la base de datos! '})
        }else{            
         
         res.json({ message:'¡artículo editado con éxito!'}); 
     }
    })
    };


    


    
 
 
     const buscarArticulo = async (req,res)=>{
    
         const {id_articulo} = req.params.id_articulo;
         const createQuery =`SELECT * FROM articulos WHERE id_articulo=?`

        const query= await mysql2.format(createQuery, [id_articulo]);
      
        database.query(query, (err, result) => {
         if (err) res.send({ message: 'Error al comunicarse con la base de datos'});
         //result.fieldCount
            res.status(200).send(result);

            //res.status(400).send('el articulo no existe')
     })
      
    }
     
     const eliminarArticulo = async (req,res)=>{
        const {id_articulo} = req.params.id_articulo;

        createQuery =`DELETE FROM articulos WHERE id_articulo=?`
        query = await mysql2.format(createQuery,[id_articulo])

       database.query(query, (err, result) => {
        if (err) res.send({ message: 'Error al comunicarse con la base de datos'});
         
           res.status(200).json({message: '¡Artículo borrado con éxito!'});
   
          // res.status(400).send('el artículo no existe. No se puede borrar')
    })
     };
 




//METODO QUE SOLO HARA USO EL ADMIN


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
    registroUsuario,
    crearArticulo,
    editarArticulo,
    buscarArticulo,
    eliminarArticulo,
    editarArticulo,
    rutaPrincipal

}