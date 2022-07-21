const {Router} = require('express');
const express = require('express');
const router = express.Router();
const { 
    testUsuario,registroUsuario,registroDatosUsuario,loginUsuario, rutaPrincipal, 
    crearArticulo, editarArticulo, buscarArticulo, eliminarArticulo
 } = require('../controllers/controllers');

/*
router.get('/', authenticarUser,(req,res)=>{
res.render

})
router.get('/admin',authenticarUser,(req,res)=>{
    res.render
});


router.get('/admin/newAticles',authenticarUser)
router.get('/admin/editArticles',authenticarUser)
router.get('/admin/user',authenticarUser)
router.get('/admin/registerUser',authenticarUser)
router.get('/logout',logout)
router.get('/usuarios',authenticarUser)
router.get('usuarios/reservaPc',authenticarUser)

*/



//router.get('/', testQuery);

// ========= LOGIN USUARIO Y REGISTRO USUARIO===========
router.post('/login',loginUsuario);
router.post('/datos',registroDatosUsuario);
router.post('/register',registroUsuario);
router.post('/admin/newArticle',crearArticulo);



router.get('/',rutaPrincipal);
router.put('/admin/editArticle:id_articulo',editarArticulo);
router.get('/admin/buscarArticle:id_articulo',buscarArticulo);
router.delete('/admin/borrarArticle:id_articulo',eliminarArticulo);


router.get('/admin',crearArticulo);


module.exports = router;