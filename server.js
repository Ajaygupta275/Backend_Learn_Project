const express = require('express');
const db =require('./db');
const app = express()
const bodyParser=require('body-parser');
const PORT = process.env.PORT || 3000

const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;
const Person =require('./models/person');
// const passport = require('./auth');
app.use(bodyParser.json());
require('dotenv').config()

// Middlerware Function

const logRequest=(req,res,next)=>{
    console.log(`[${new Date().toLocaleString()}] Request Made to: ${req.originalUrl}`);
    next();
}

app.use(logRequest);

passport.use(new LocalStrategy(async(username,password,done)=>{
    try{
         console.log('Received credentials:',username,password);
         const user= await Person.findOne({username:username});
         if(!user)
            return done(null,false,{message:'Incorrect username'});

         const isPasswordMatch=user.password===password ? true :false;

         if(isPasswordMatch){
          return done(null,user);
         }else{
          return done(null,false,{message:"Incorrect passowrd"});
         }
    
        }catch(err){
              return done(err)
    }
}))



app.use(passport.initialize());
const localAuthMiddleware=passport.authenticate('local',{session:false})


app.get('/',localAuthMiddleware , function(req, res) {
  res.send('Welcome to my hotel I can Help You')
});

// Import the file 
const personRoutes=require('./routes/personRoutes');
const menuRoutes=require('./routes/menuItemRoutes');


app.use('/person',localAuthMiddleware ,personRoutes);
app.use('/menu',localAuthMiddleware ,menuRoutes);


app.listen(PORT,()=>{
    console.log(`Server running on port:${PORT}/`);
});
