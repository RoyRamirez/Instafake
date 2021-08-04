const express = require('express');
const app = express();
const cors = require('cors');
const conection = require('./dbConnection/connection');
const port = 5000;

app.use(cors({ origin: "*", }));

conection()
  .then(() => console.log("conexion a base de datos"))
  .catch(e => console.log(e));

app.listen(port, () => {
  console.log(`Server en puerto ${port}`);
});
