//importaciones
const { Router } = require('express');
const { getUsuarios, PostUsuarios, PutUsuarios, DeleteUsuarios } = require('../controllers/usuario');

const router = Router();


router.get('/mostrar', getUsuarios);


router.post('/agregar', PostUsuarios);

router.put('/editar/:id', PutUsuarios);

router.delete('/delete/:id', DeleteUsuarios)


module.exports = router;