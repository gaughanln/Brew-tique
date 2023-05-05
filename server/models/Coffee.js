const mongoose = require('mongoose');

const coffeeSchema = new mongoose.Schema({
    name: String,
    image: String,
    roast: String,
    description: String,
    price: Number,
});

const Coffee = mongoose.model('Coffee', coffeeSchema);

module.exports = Coffee;