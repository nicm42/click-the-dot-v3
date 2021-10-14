const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hexagonSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  attempts: {
    type: Number,
    required: true
  }
});

const Hexagon = mongoose.model('Hexagon', hexagonSchema);

module.exports = Hexagon;