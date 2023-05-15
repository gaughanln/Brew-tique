import { Schema, model } from 'mongoose';

const coffeeSchema = new Schema({    
    name: String,
    image: String,
    location: String,
    roast: String,
    description: String,
    price: Number,
});

const Coffee = model('Coffee', coffeeSchema);

export default Coffee;