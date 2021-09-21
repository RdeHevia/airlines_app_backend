const router = require('express').Router();

const Airport = require('../models/airport');
const Airline = require('../models/airline');
const Route = require('../models/route');

router.get('/airlines', async (req, res) => {
  const airlines = await Airline.find({});
  res.json(airlines);
});

router.get('/airports', async (req, res) => {
  const airports = await Airport.find({});
  res.json(airports);
});

router.get('/routes', async (req, res) => {
  const routes = await Route.find({});
  res.json(routes);
})

module.exports = router;