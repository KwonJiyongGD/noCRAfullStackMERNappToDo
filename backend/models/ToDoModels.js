const mongoose = require('mongoose');

const todoSchema = newMongoose.Schema({
  text: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('ToDo', todoSchema);
