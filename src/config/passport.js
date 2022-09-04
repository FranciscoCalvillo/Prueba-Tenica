const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const User = require('../models/user');
const bycryp = require('bcryptjs');


passport.use('login',new localStrategy({
    usernameField: 'email',
    passwordField: 'password'
},async (email, password,done) => {
    const userComprob = await User.findOne({email})
    if( !userComprob){
        return done(null, false ,'user dont exist');
    } else {
        const match = await userComprob.matchPass(password);
        if(match){
            return done(null,userComprob);
        } else {
            return done(null,false,'incorrect Password');
        }
    }
}));

passport.serializeUser((user,done) => {
    done(null,user.id);
});

 passport.deserializeUser((id, done) => {
    User.findById(id,(err,user) => {
        done(err,user);
    })
})


