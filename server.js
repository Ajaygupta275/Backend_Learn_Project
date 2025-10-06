const express = require('express');
const db =require('./db');
const app = express()
const bodyParser=require('body-parser');
app.use(bodyParser.json());
require('dotenv').config()
const PORT = process.env.PORT || 3000


app.get('/', (req, res) => {
  res.send('Welcome to my hotel I can Help You')
});

// Import the file 
const personRoutes=require('./routes/personRoutes');
const menuRoutes=require('./routes/menuItemRoutes');


app.use('/person',personRoutes);
app.use('/menu',menuRoutes);


app.listen(PORT,()=>{
    console.log(`Server running on port:${PORT}/`);
});
