const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const airportSchema = new mongoose.Schema({
  _id: {
    type: String,
    length: 3
  },
  name: {
    type: String,
    required: true,
  },
  lat: Number,
  long: Number
});

airportSchema.plugin(uniqueValidator);

// set up JSON output for all the instances of noteSchema
airportSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.code = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

module.exports = mongoose.model('Airport', airportSchema);