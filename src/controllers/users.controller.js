const usersCntrl = {};
const orden = require('../models/orden');
const user = require('../models/user');
const User = require('../models/user');

usersCntrl.signUpRegister = async (req,res) => {
    
    const {name, email, password, confirmPass} = req.body; 
    //console.log(req.body);

    if (name  && email && password && password==confirmPass){
        const usedEmail = await orden.exists({email})!= null;
        //console.log(usedEmail);
        console.log(isValidEmail(email));
        if( isValidEmail(email) && usedEmail){
            
            const newUser =  new User ({
                name, email, password
            }) 
    
            //await newUser.save();
            res.send('sign up Succesful')
        } else {
            res.send('this email is not valid')
        }
        
    } else {
        res.send('Error pls check your passwords to match')
    }
    
}

usersCntrl.signInUsers = async (req,res) =>{
    const {name, password} = req.body;
    const user = await User.exists({name,password});
    console.log(user);
    if( user){
        res.send('Welcome');
    } else {
        res.send('Password or Name incorrect')
    }
    
}

usersCntrl.logOut = (req,res) => {
    res.send('logout');
}

usersCntrl.getUsers = async (req,res) => {
    const users = await User.find();
    res.json(users);
}


function isValidEmail(email) {
    let res =true;
    const comprob = email.split('@').join('.').split('.');
    //console.log(comprob)
    if (comprob == 3){
        var i = 0;
        while (i<comprob.length && res){
            res = (/^[a-zA-Z]+$/.test(comprob[i]));
            i++ ;
        }
        
    } else {
        res = false
    }
    return res;
   
}
module.exports = usersCntrl;