const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const triangleSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  attempts: {
    type: Number,
    required: true
  }
});

const Triangle = mongoose.model('Triangle', triangleSchema);

module.exports = Triangle;