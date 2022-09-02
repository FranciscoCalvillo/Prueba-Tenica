//constants
const express = require("express");
const app = express();
const exphbs = require('express-handlebars');
const { extname } = require("path");
const path = require('path');

//middsets
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname,'views'));
app.engine('.hbs', exphbs.engine ({
    defaultLayout:'main',
    layoutDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs' 
}));
app.set('view engine', '.hbs');

//static files
app.use(express.static(path.join(__dirname,'public')));

//routes
app.get('/',(req,res)=>{
    res.render('index')
})

//exports
module.exports=app;