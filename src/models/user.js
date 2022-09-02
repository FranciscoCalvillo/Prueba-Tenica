const {Schema,model} = require('mongoose');

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

module.exports = model('User', UsersSchema);