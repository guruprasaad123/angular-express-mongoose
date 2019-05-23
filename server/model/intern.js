const mongoose = require('mongoose');


export const Intern = mongoose.model('Intern', { 
    name: String ,
    skills:String,
    age:Number,
    dob:String,
 });

module.exports = Intern;