const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scoreSchema = new Schema({
  shape: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  attempts: {
    type: Number,
    required: true
  }
});

const Score = mongoose.model('Score', scoreSchema);

module.exports = Score;