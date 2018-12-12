const express = require('express');
const cors = require('cors');
const app = express(); 

//setting 
app.set('port',process.env.PORT || 3000);

//middleware 
app.use(cors({origin: 'http://localhost:4200'})); //IP donde esta levantado el front end

app.use(express.json()); 

//routes 
app.use('/apilab/sucursales', require('./routers/sucursales')); 

//server 
app.listen(app.get('port'),()=>{ 
    console.log('server on port ',app.get('port')) 
});