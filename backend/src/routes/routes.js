const {Router} = require('express');
const express = require('express');
const router = express.Router();
const { 
    testUsuario,registroUsuario,registroDatosUsuario,loginUsuario } = require('../controllers/controllers');


router.get('/:id', testUsuario);
//router.get('/', testQuery);

// ========= LOGIN USUARIO Y REGISTRO USUARIO===========
router.post('/login',loginUsuario);
router.post('/register',registroDatosUsuario);
router.post('/register',registroUsuario);

module.exports = router;