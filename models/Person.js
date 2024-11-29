const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//user schema 
const personSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type:Number
    },
    work: {
        type:String,
        enum:['chef','waiter','manager'],
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    mobile: {
        type: Number,
        required: true
    },
    address: {
        type: String
    },
    salary: {
        type: Number,
        required: true
    }
});

//user model 

const Person = mongoose.model('person', personSchema);

module.exports = Person;