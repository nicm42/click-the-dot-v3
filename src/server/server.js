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

app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
  res.send('Sending res');
})

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
  const score = new Score();
  score.shape = req.body.shape;
  score.name = req.body.name;
  score.attempts = req.body.attempts;
  score.save()
    .then((result) => {
      console.log('Score added');
      res.json(result)
    })
    .catch((err) => {
      console.log(err)
    })
})
