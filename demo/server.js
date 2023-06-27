const express = require('express');
const port = 4000;
const cors = require('cors')

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
