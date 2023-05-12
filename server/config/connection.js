const mongoose = require("mongoose");
require('dotenv').config()

mongoose
  //figure out the REACT_APP_MONGODB_URI since .env variables are not working
  .connect(process.env.REACT_APP_MONGODB_URI || "mongodb+srv://gaughanln:Project3@brewtique.vg0bfxn.mongodb.net", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
  })
  .catch((err) => console.log(err.reason));

module.exports = mongoose.connection;
