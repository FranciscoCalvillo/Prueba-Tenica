//constants
const express = require("express");
const app = express();
const exphbs = require('express-handlebars');
//const { extname } = require("path");
const path = require('path');
const morgan= require('morgan');
const session  = require('express-session');
const passport = require('passport');
require('./config/passport')

//middsets
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
//app.use(methodOverride('_method'));
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))

//Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname,'views'));
app.engine('.hbs', exphbs.engine ({
    defaultLayout:'main',
    layoutDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs' 
}));
app.use(passport.initialize());
app.use(passport.session());
app.set('view engine', '.hbs');


//routes
//app.use(require('./routes/index.routes') );
app.use(require('./routes/orden.routes'));
app.use(require('./routes/users.routes'));

//static files
app.use(express.static(path.join(__dirname,'public')));

//Global variables
/*app.use(req, res, next) => {
    res.locals.user = req.user || null;
    next();
}*/

//exports
module.exports=app;