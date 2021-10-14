const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const heartSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  attempts: {
    type: Number,
    required: true
  }
});

const Heart = mongoose.model('Heart', heartSchema);

module.exports = Heart;