//constants
const app = require('./server');
const morgan= require('morgan');


//imports
require('./database');
require('dotenv').config();

//settings

app.set('json spaces', 2);

//middsets
app.use(morgan('dev'));

//routes


//starting server
app.listen(app.get('port'),() =>{
    console.log("Server port 3000");
})

//logic

