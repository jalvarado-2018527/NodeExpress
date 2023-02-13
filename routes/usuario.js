//importaciones
const { Router } = require('express');
const { check } = require('express-validator');
const { getUsuarios, PostUsuarios, PutUsuarios, DeleteUsuarios } = require('../controllers/usuario');
const { emailExiste, esRoleValido, idExiste } = require('../helpers/db-validators');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();


router.get('/mostrar', getUsuarios);


router.post('/agregar',[
    check('nombre','el nombre es obligatorio para agregar').not().isEmpty(),
    check('password','la contrase;a minimo tienen que ser 6 caracteres').isLength({min: 6}),
    check('correo', 'El correo no es correcto').isEmail(),
    check('correo').custom( emailExiste ),
    check('rol').custom( esRoleValido ),
    validarCampos
], PostUsuarios);

router.put('/editar/:id',[
    check('id', "no es un id valido").isMongoId(),
    check('id').custom( idExiste),
    check('correo', 'El correo no es correcto').isEmail(),
    check('correo').custom( emailExiste ),
    validarCampos
], PutUsuarios);

router.delete('/delete/:id',[
    check('id', "id de mongo no existe").isMongoId(),
    check('id').custom( idExiste),
    validarCampos
],  DeleteUsuarios)


module.exports = router;