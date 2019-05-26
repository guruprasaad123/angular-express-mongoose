const mongoose = require('mongoose');

const intern_schema = new mongoose.Schema(
	{ 
    name: String ,
    skills:[String],
    age:Number,
    dob:String,
    role:String
});

const Intern = mongoose.model('Intern',intern_schema );

module.exports = Intern;