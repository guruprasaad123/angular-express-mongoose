const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const user_schema =new mongoose.Schema(
 { 
    username: String ,
    email: { type: String, unique: true, lowercase: true, trim: true },
    password:String,
    age:Number,
    dob:String,

 }
  );


// Before saving the user, hash the password
user_schema.pre('save', function(next) {
    const user = this;
    console.log('pre',user);
    if (!user.isModified('password')) {
      console.log('modified',user);
     return next();
      }
    bcrypt.genSalt(10, function(err, salt) {
      if (err) { 
        return next(err); 
      } 
      bcrypt.hash(user.password, salt, function(error, hash) {
        if (error) { 
          return next(error); 
        }
        user.password = hash;
        console.log('pre',user)
        next();
      });
    });
  });

const comparePassword = function(candidatePassword, callback) {
      bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) { return callback(err); }
        callback(null, isMatch);
      });
    };
  
  console.log(comparePassword);

 user_schema.methods.comparePassword=comparePassword;
  
  // Omit the password when returning a user
  user_schema.set('toJSON', {
    transform: function(doc, ret, options) {
      delete ret.password;
      return ret;
    }
  });
  


 const User = mongoose.model('User',user_schema);

module.exports = User;