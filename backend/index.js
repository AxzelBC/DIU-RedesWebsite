const express = require('express');
const app = express()

app.get('/', (req,res)=>{
    res.send('el servidor ha funcionado');
})

//RUTAS
const routes = require('./router/routes.js')

app.use(routes)

app.listen(3000, ()=>{
    console.log('server on port 3000');
})