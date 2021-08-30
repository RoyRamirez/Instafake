const express = require('express');
const router = express.Router();
const publicacionController = require('../controladores/PublicacionController');

router.get('/publicaciones', publicacionController.mostrar);
module.exports = router;