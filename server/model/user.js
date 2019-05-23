const mongoose = require('mongoose');


export const User = mongoose.model('User', { 
    name: String ,
    email:String,
    password:String,
    age:Number,
    dob:String,

 });

module.exports = User;