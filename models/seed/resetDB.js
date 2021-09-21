const mongoose = require('mongoose');
const config = require('../../utils/config');

const { airlines, airports, routes } = require('./data');
const Airline = require('../airline');
const Airport = require('../airport');
const Route = require('../route');


const initializeAirlines = async () => {
  const promises = airlines.map(airlineData => {
  const airline = new Airline({
    _id: airlineData.id,
    name: airlineData.name,
  });

    return airline.save();
  });

  const airlinesAdded = await Promise.all(promises);
  console.log("collection 'airlines' created succesfully");
}

const initializeAirports = async () => {
  const promises = airports.map(airportData => {

    const airport = new Airport({
      _id: airportData.code,
      name: airportData.name,
      lat: airportData.lat,
      long: airportData.long
    });
    return airport.save();
  });

  const airportsAdded = await Promise.all(promises);
  console.log("collection 'airports' created succesfully");
}


const initializeRoutes = async () => {
  const promises = routes.map(routeData => {
    const route = new Route({...routeData});
    return route.save();
  });

  const routesAdded = await Promise.all(promises);
  console.log("collection 'routes' created succesfully");
}

mongoose.connect(config.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(async () => {
  console.log('connected to MongoDB');

  const promise1 = mongoose.connection.db.dropCollection('airlines');
  const promise2 = mongoose.connection.db.dropCollection('airports');
  const promise3 = mongoose.connection.db.dropCollection('routes');
  Promise.all([promise1, promise2, promise3])
    .then(() => console.log('collections dropped succesfully'))
    .catch((err) => console.log(err));

  await Promise.all([initializeAirlines(), initializeAirports()]);
  await initializeRoutes();

}).catch(error => {
  console.log(`error connection to MongoDB: ${error.message}`);
});