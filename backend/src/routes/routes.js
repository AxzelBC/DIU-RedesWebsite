const {Router} = require('express');
const express = require('express');
const router = express.Router();
const { 
    testUsuario,registroUsuario,registroDatosUsuario,loginUsuario, rutaPrincipal, 
    crearArticulo, editarArticulo, buscarArticulo, eliminarArticulo
 } = require('../controllers/controllers');





//router.get('/', testQuery);

// ========= LOGIN USUARIO Y REGISTRO USUARIO===========
router.post('/login',loginUsuario);
router.post('/datos',registroDatosUsuario);
router.post('/register',registroUsuario);
router.post('/admin/newArticle',crearArticulo);



router.get('/',rutaPrincipal);
router.put('/admin/editArticle/:id_articulo',editarArticulo);
router.get('/admin/buscarArticle/:id_articulo',buscarArticulo);
router.delete('/admin/borrarArticle/:id_articulo',eliminarArticulo);



module.exports = router;