const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const starSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  attempts: {
    type: Number,
    required: true
  }
});

const Star = mongoose.model('Star', starSchema);

module.exports = Star;