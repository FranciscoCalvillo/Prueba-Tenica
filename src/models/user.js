//constants
const {Schema,model} = require('mongoose');
const bycryp = require('bcryptjs')

//schema
const UsersSchema = new Schema({
    name: {
        type: String, require: true
    },
    email: {
        type: String, require: true 
    },
    password: {
        type: String, require:true
    }
},{
    timestamps: true
});

//methos
UsersSchema.methods.encryptPass = async password => {
    const salt = await bycryp.genSalt(10);
    return await bycryp.hash(password,salt);
};

UsersSchema.methods.matchPass =  async function(password) {
    return await bycryp.compare(password,this.password);
}

module.exports = model('User', UsersSchema);