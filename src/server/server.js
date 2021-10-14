require('dotenv').config();
const express = require('express');
var cors = require("cors");
const mongoose = require('mongoose');
const Shape = require('../models/shape');

const app = express();
const port = process.env.PORT || 8000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then((result) => app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
}))
  .catch((err) => console.log(err))

// Any other request goes to index
/* app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '..', '..', 'build', 'index.html'));
}); */

app.use(cors());

app.get('/', async (req, res) => {
  res.send('Sending res');
})

app.get('/get', async (req, res) => {
  const shape = new Shape({
    name: 'Nic2',
    attempts: 3
  });
  shape.save()
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      console.log(err)
    })
})

app.get('/all', async (req, res) => {
  Shape.find()
    .then((result) => {
      console.log(result)
      res.json(result)
    })
    .catch((err) => {
      console.log(err)
    })
})
