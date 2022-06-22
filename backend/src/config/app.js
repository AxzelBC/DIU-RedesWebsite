const express = require('express');
const UserRoutes= require('../routers/routers');
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// endpoints: A PARTIR DE EL COMANDO /user se van a enlistar todas las rutas que tienen logica
// endpoints
app.use('/user', userRoutes);

module.exports = app;