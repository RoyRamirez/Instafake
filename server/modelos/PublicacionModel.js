const mongoose = require('mongoose');

const PublicacionSchema = new mongoose.Schema(
  {
    fotoPerfil: {
      type: String,
      require: true,
    },
    nombre: {
      type: String,
      require: true,
    },
    fotoPublicacion: {
      type: String,
      require: true,
    },
    liked: {
      type: Boolean,
      default: false
    },
    likes: {
      type: Int32Array,
      default: 0
    },
    descripcionPubli: {
      type: String,
      default: ""
    },
    comentarios: {
      type: Int32Array,
      default: 0
    },
    tiempoPubli: {
      type: String,
      default: "0 minutos"
    }
  }
)

const Publicacion = mongoose.model('Publicacion', PublicacionSchema);

module.exports = {Publicacion};