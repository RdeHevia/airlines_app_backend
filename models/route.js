const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

// create new schema
const routeSchema = new mongoose.Schema({
  airline: {
    type: Number,
    required: true,
    ref: 'Airline'
  },
  src: {
    type: String,
    length: 3,
    required: true,
    ref: 'Airport'
  },
  dest: {
    type: String,
    length: 3,
    required: true,
    ref: 'Airport'
  }
});

// attach uniqueValidator plugin to routeSchema
routeSchema.plugin(uniqueValidator);

// set up JSON output for all the instances of noteSchema
routeSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

module.exports = mongoose.model('Route', routeSchema);