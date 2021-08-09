const express = require('express');
const router = express.Router();
const usuarioController = require('../controladores/UsuarioController');

router.get('/usuarios', usuarioController.mostrar);
module.exports = router;