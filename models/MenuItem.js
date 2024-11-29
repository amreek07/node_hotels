const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//user schema 
const menuItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type:Number,
        required: true
    },
    taste: {
        type:String,
        enum:['sweet','spicy','sour'],
        required: true
    },
    is_drink: {
        type: Boolean,
        default: false,
    },
    ingredients: {
        type: [String],
        default: []
    },
    num_sales: {
        type: Number,
        default: 0
    }
});

//user model 

const MenuItem = mongoose.model('MenuItem', menuItemSchema);

module.exports = MenuItem;