require('dotenv').config();
const express = require('express');
var cors = require("cors");
const mongoose = require('mongoose');

const Score = require('../models/score');

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

//app.use(cors());
app.options('*', cors());
app.use(express.json());

app.get('/', async (req, res) => {
  res.send('Sending res');
})

/* app.get('/get', async (req, res) => {
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
}) */

app.get('/getscores', async (req, res) => {
  Score.find()
    .then((result) => {
      console.log(result)
      res.json(result)
    })
    .catch((err) => {
      console.log(err)
    })
})

app.post('/postscores', async (req, res) => {
  console.log('Posting scores')
  console.log(req.body);
  //Score.save(req.body);
  const score = new Score();
  score.shape = req.body.shape;
  score.name = req.body.name;
  score.attempts = req.body.score;
  score.save().then((result) => {
    console.log('Score added')
  })
  .catch((err) => {
    console.log(err)
  })
})
