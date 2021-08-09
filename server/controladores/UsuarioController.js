const mongoose = require('mongoose');
const Usuario = require('../modelos/UsuarioModel');

// Mostrar
module.exports.mostrar = (req, res) => {
  const correo = req.query.correo;
  const pass = req.query.password;
  let us = {};
  if((correo !== "" && correo !== undefined) && (pass !== "" && pass !== undefined)){
    us = {
      correo: correo,
    }
  }
  else {
    us = {};
  }
  mongoose.model('Usuario').find(us, (error, usuarios) => {
    if(error) {
      console.log(error);
    }
    return res.json(usuarios);
  });
}