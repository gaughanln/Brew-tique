// const mongoose = require('mongoose');
// const User = require('../models/User')

// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

const users = [
  {
    firstName: 'Star',
    lastName: 'Bucks',
    email: 'starbucks@gmail.com',
    password: 'Siren1234'
  },
  {
    firstName: 'Tim',
    lastName: 'Horton',
    email: 'timhorton@gmail.com',
    password: 'Canada1234'
  },
];

module.exports = users;