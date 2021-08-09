const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      require: true,
    },
    correo: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    }
  }
)

const Usuario = mongoose.model('Usuario', UsuarioSchema);

module.exports = {Usuario};