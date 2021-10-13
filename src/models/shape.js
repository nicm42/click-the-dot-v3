const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shapeSchema = new Schema({
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