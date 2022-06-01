const {Router}=require('express');
const {check}=require('express-validator');
const { auth, test } = require('../controllers/controller');
const { validarCampos } = require('../middlewares/validar-campos');
const {validarJWT}= require('../middlewares/validar-jwt')

const router= Router()

router.post('/auth', [
    check('username', 'El username es obligatorio'),
    validarCampos,

], auth);

router.get('/test',[validarJWT],
 test);

 module.exports=router