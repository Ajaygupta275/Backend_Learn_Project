
// const passport = require("passport");
// const LocalStrategy = require('passport-local').Strategy;
// const Person =require('./models/person');


// passport.use(new LocalStrategy(async(username,password,done)=>{
//     try{
//          console.log('Received credentials:',username,password);
//          const user= await Person.findOne({username:username});
//          if(!user)
//             return done(null,false,{message:'Incorrect username'});

//          const isPasswordMatch=user.password===password ? true :false;

//          if(isPasswordMatch){
//           return done(null,user);
//          }else{
//           return done(null,false,{message:"Incorrect passowrd"});
//          }
    
//         }catch(err){
//               return done(err)
//     }
// }))

// module.export=passport