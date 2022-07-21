const express = require('express');
const userRoutes= require('../routes/routes');
const cookieParser = require('cookie-parser');

const app = express();


app.set('view engine', 'ejs')

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('',async(req, res)=>{
const result = await prisma.articulos.findMany()


})

//setando las variables de entorno
//dotenv.config({path: '/.env'})
//usando las cookies
app.use(cookieParser());

//borrar la cache del navegador en caso de que el boton de logout del front no lo haga
/*
app.uses.header('e(function(req,res,next){
if(!req.codigo)
rcache-control', 'private, no-cache, no-store, must-revalidate')


})
*/

// endpoints: A PARTIR DE EL COMANDO /user se van a enlistar todas las rutas que tienen logica
// endpoints

//app.use('/user', userRoutes);
app.use(userRoutes);





module.exports = app;