const router = require('express').Router();
const apiUsuarioRouter =require('./api/usuarios');
//const apiArticuloRouter =require('./api/usuarios');

router.use('/usuario' , apiUsuarioRouter);
//router.use('/articulo' , apiArticuloRouter);

module.exports=router;

