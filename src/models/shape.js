const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shapeSchema = new Schema({
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

const Shape = mongoose.model('Shape', shapeSchema);

module.exports = Shape;