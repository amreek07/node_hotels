const express = require('express');
const app = express();
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

//import models
const personRoutes = require('./routes/personRoutes');
const menuRoutes = require('./routes/menuRoutes');


app.use(bodyParser.json());
app.use(cors());


const PORT = process.env.PORT;
connectDB();


app.use('/person',personRoutes);
app.use('/menu', menuRoutes)

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
})
