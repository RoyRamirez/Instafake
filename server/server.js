const express = require('express');
const app = express();
const cors = require('cors');
const conection = require('./dbConnection/connection');
const usuarios = require('./rutas/UsuarioRoutes');
const publicaciones = require('./rutas/PublicacionRoutes');
const port = 5000;

app.use(cors({ origin: "*", }));

conection()
  .then(() => console.log("conexion a base de datos"))
  .catch(e => console.log(e));

app.use(usuarios);
app.use(publicaciones);

app.get('/', (req, res) => {
  res.send('hola');
})

app.listen(port, () => {
  console.log(`Server en puerto ${port}`);
});
