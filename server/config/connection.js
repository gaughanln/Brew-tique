const mongoose = require("mongoose");
require('dotenv').config({path: '../.env'});

mongoose
  //figure out the REACT_APP_MONGODB_URI since .env variables are not working
  .connect(process.env.REACT_APP_MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
  })
  .catch((err) => console.log(err.reason));

module.exports = mongoose.connection;
