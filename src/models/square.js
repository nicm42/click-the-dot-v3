const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const squareSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  attempts: {
    type: Number,
    required: true
  }
});

const Square = mongoose.model('Square', squareSchema);

module.exports = Square;