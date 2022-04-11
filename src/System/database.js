const mongoose = require('mongoose');
require('dotenv').config();

//---- MongoDB Settings----//
mongoose.connect(process.env.MONGO_DB_URL, {useNewUrlParser: true, useUnifiedTopology: true}) 
    .then(console.log(`Database connected...: ${process.env.DB_NAME}`))
    .catch(error => {console.log('DATABASE CONNECTION ERROR : ' + error)})