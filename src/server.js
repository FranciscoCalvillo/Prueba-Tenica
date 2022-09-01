//constants
const express = require("express");
const app = express();

//middsets
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Global Variables
app.set('port', process.env.PORT || 3000);

//routes
app.get('/',(req,res)=>{
    res.send('hello world')
})

//exports
module.exports=app;