require('dotenv').config();
const express = require('express');
var cors = require("cors");
const mongoose = require('mongoose');

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

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/getscores', require('./routes/getScores'))
app.use('/api/postscores', require('./routes/postScores'))
