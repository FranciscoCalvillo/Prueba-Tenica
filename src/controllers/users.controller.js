const usersCntrl = {};
const orden = require('../models/orden');
//const user = require('../models/user');
const User = require('../models/user');
const passport = require('passport');

usersCntrl.signUpRegister = async (req, res) => {

    const { name, email, password, confirmPass } = req.body;


    if (name && email && password && password == confirmPass) {
        const usedEmail = await User.exists({ email }) != null;
        const usedName = await User.exists({ name }) != null;
        //console.log(isValidEmail(email))
        if (isValidEmail(email) && !usedEmail) {

            if (isValidName(name) && !usedName) {
                const newUser = new User({
                    name, email, password
                })
                newUser.password = await newUser.encryptPass(password);
                await newUser.save();
                res.send('sign up Succesful')
            } else {
                res.send('this User name is invalid or already on use')
            }

        } else {
            res.send('this email is not valid or already on use')
        }

    } else {
        res.send('Error pls check your passwords to match')
    }

}

/*usersCntrl.signInUsers = async (req,res) =>{


    const {name, password} = req.body;
    const user = await User.exists({name,password});
    //console.log(user);
    if( user){
        res.send('Welcome');
    } else {
        res.send('Password or Name incorrect')
    }
    
}*/

usersCntrl.signInUsers = passport.authenticate('login', {
    failureMessage: 'Incorrect credentials',
    successRedirect: '/orden'
});


usersCntrl.logOut = (req, res, next) => {
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Logout')
        //res.redirect('/users/signin');
    });
};

usersCntrl.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
}


function isValidEmail(email) {
    let res = true;
    const comprob = email.split('@').join('.').split('.');

    if (comprob.length == 3) {
        var i = 0;
        while (i < comprob.length && res) {
            res = (/^[a-zA-Z]+$/.test(comprob[i]));
            i++;
        }

    } else {
        res = false
    }
    return res;

}

function isValidName(name) {
    let res = true;
    const comprob = name.split(' ');

    if (comprob.length >= 1) {
        var i = 0;
        while (i < comprob.length && res) {
            res = (/^[a-zA-Z]+$/.test(comprob[i]));
            i++;
        }

    } else {
        res = false
    }
    return res;

}
module.exports = usersCntrl;