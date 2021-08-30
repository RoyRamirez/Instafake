const mongoose = require('mongoose');
const Publicacion = require('../modelos/PublicacionModel');

// Mostrar
module.exports.mostrar = (req, res) => {
  mongoose.model('Publicacion').find({}, (error, publicaciones) => {
    if(error) {
      console.log(error);
    }
    return res.json(publicaciones);
  });
}