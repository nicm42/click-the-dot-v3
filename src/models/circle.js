const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const circleSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  attempts: {
    type: Number,
    required: true
  }
});

const Circle = mongoose.model('Circle', circleSchema);

module.exports = Circle;