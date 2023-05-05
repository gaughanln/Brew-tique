const mongoose = require('mongoose');
const Coffee = require('../models/Coffee');
const coffees = require('./coffeeData');

mongoose.connect('mongodb://localhost:27017/coffee-shop', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function seedDB() {
  try {
    await Coffee.deleteMany({});
    console.log('Deleted old data');

    await Coffee.insertMany(coffees);
    console.log('Inserted new data');

    mongoose.connection.close();
    console.log('Connection closed');
  } catch (error) {
    console.log(error);
  }
}

seedDB();
