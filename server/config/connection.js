// const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://gaughanln:Project3@brewtique.vg0bfxn.mongodb.net/');

// module.exports = mongoose.connection;

const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    createIndex: true,
  })
  .catch((err) => console.log(err.reason));

module.exports = mongoose.connection;
