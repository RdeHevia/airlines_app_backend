const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const config = require('../utils/config');

// create an schema
const airlineSchema = new mongoose.Schema({
  _id: Number,
  name: {
    type: String,
    required: true,
    unique: true
  },
});

airlineSchema.plugin(uniqueValidator);

// set up JSON output for all the instances of noteSchema
airlineSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

module.exports = mongoose.model('Airline', airlineSchema);