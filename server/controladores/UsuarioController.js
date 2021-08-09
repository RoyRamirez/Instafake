const mongoose = require('mongoose');
const Usuario = require('../modelos/UsuarioModel');

// Mostrar
module.exports.mostrar = (req, res) => {
  mongoose.model('Usuario').find({}, (error, usuarios) => {
    if(error) {
      // return res.status(500).json
      console.log(error);
    }
    console.log(usuarios);
  });
  return res.json();
}