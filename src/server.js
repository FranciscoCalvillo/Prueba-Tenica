//constants
const express = require("express");
const app = express();
const exphbs = require('express-handlebars');
const { extname } = require("path");
const path = require('path');
const morgan= require('morgan');

//middsets
app.use(express.json());
app.use(morgan('dev'));
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


//routes
app.use(require('./routes/index.routes') );
app.use(require('./routes/orden.routes'));

//static files
app.use(express.static(path.join(__dirname,'public')));

//exports
module.exports=app;