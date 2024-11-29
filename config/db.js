const mongoose = require('mongoose');
require('dotenv').config();


const MONGO_URI = process.env.MONGO_URI

const connectDB = async()=>{
    try{
        const conn = await mongoose.connect(MONGO_URI);
        console.log('Database connected!...');
    }catch(err){
        console.log('err connecting mongoDB', err);
    }
}

module.exports = connectDB;
