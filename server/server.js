const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;

app.use(cors({ origin: "*", }));

app.listen(port, () => {
  console.log(`Server en puerto ${port}`);
});