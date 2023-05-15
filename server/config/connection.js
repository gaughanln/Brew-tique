const mongoose = require("mongoose");
require('dotenv').config({path: '../.env'});

mongoose
  // uses the environment variable to connect to MongoDB Atlas
  .connect(process.env.REACT_APP_MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
  })
  .catch((err) => console.log(err.reason));

module.exports = mongoose.connection;
