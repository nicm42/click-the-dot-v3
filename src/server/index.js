require('dotenv').config();
const express = require('express');
var cors = require("cors");
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 8000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
}))
  .catch((err) => console.log(err))

app.use(cors());
app.use(express.json());

// Serve up the front end
app.use(express.static(path.resolve(__dirname, '..', '..', 'public')));

// Routes
app.use('/api/getscores', require('./routes/getScores'))
app.use('/api/postscores', require('./routes/postScores'))
