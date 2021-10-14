import express, { Request, Response } from 'express';
//const path = require('path');
require('dotenv').config();

var cors = require("cors");
const mongoose = require('mongoose');
const Shape = require('../models/shape');
var cors = require("cors");
const app = express();
const port = process.env.PORT || 8000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then((result: any) => app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
}))
  .catch((err: any) => console.log(err))

// Any other request goes to index
/* app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '..', '..', 'build', 'index.html'));
}); */

app.use(cors());

app.get('/', async (req: Request, res: Response) => {
  res.send('Sending res');
})

app.get('/get', async (req: Request, res: Response) => {
  const shape = new Shape({
    name: 'Nic2',
    attempts: 3
  });
  shape.save()
    .then((result: any) => {
      res.send(result)
    })
    .catch((err: any) => {
      console.log(err)
    })
})

app.get('/all', async (req: Request, res: Response) => {
  Shape.find()
    .then((result: any) => {
      console.log(result)
      res.json(result)
    })
    .catch((err: any) => {
      console.log(err)
    })
})

/* module.exports = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
}); */
