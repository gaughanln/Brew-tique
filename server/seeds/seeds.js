const mongoose = require('mongoose');
const Coffee = require('../models/Coffee');
const coffees = require('./coffeeData');
const users = require('./user');
const User = require ('../models/User')
require('dotenv').config({path: '../.env'});


mongoose.connect(process.env.MONGODB_URI || "testing", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function seedDB() {
  try {
    await User.deleteMany({});
    await Coffee.deleteMany({}); //seeding coffee data
    console.log('Deleted old data');



    await User.insertMany(users);
    await Coffee.insertMany(coffees); // seeding coffee data
    console.log('Inserted new data');

    mongoose.connection.close();
    console.log('Connection closed');
  } catch (error) {
    console.log(error);
  }
}

seedDB();
