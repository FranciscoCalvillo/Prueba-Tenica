const helpers = {};

helpers.isAuthenticated = (req,res,next) =>{
    if (req.isAuthenticated()){
        return next();
    }
    res.send('youre not login');
}

module.exports=helpers;