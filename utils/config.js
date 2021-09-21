require('dotenv').config();

// const PORT = process.env.PORT;
// const MONGDB_URI = process.env.MONGODB_URI;
const PORT = 3001;
const MONGODB_URI = "mongodb+srv://rdh:covid19sucks@cluster0.jzwh7.mongodb.net/app?retryWrites=true&w=majority";

module.exports = {
  PORT,
  MONGODB_URI
}