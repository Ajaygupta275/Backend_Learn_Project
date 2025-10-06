const mongoose = require('mongoose');
require('dotenv').config();
// define the mongodb connection url
const mongoURL=process.env.MONGO_DB_LOCALURL;

//Set up mongodb connection


mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology:true,
})

// Get the default connection
// Mongoose maintains a default connnection object representing the mongoDB Connection

const db=mongoose.connection;

// Define event listener for the database connection
db.on('connected',()=>{
    console.log('connected to MongoDB Server');

});
db.on('error',(err)=>{
    console.log('Error to MongoDB Server',err);

});

db.on('disconnected',()=>{
    console.log('MongoDB Disconnected');

});

module.exports=db;