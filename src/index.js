//constants
const app = require('./server');
const morgan= require('morgan');

//imports
require('./database');
require('dotenv').config();

console.log(process.env.TESTING)
//settings

app.set('json spaces', 2);

//middsets
app.use(morgan('dev'));

//routes


//starting server
app.listen(app.get('port'),() =>{
    console.log("Server port 3000");
})