const express = require('express');
const db =require('./db');
const app = express()
const bodyParser=require('body-parser');
app.use(bodyParser.json());



app.get('/', (req, res) => {
  res.send('Welcome to my hotel I can Help You')
});

// Import the file 
const personRoutes=require('./routes/personRoutes');
const menuRoutes=require('./routes/menuItemRoutes');


app.use('/person',personRoutes);
app.use('/menu',menuRoutes);


app.listen(3000,()=>{
    console.log('port 3000 running');
});
