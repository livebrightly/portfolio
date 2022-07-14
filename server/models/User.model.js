const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const bcrypt = require('bcrypt');

// const SALT_ROUNDS = 6

const userSchema = new Schema(
  {
    name: String,
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,

      //   validate: {
      //     validator: function(v) {
      //       return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v);
      // }
      // }
    },
    password: String,
  },
  {
    timestamps: true,
  }
);

// //remove password when serializing data
// userSchema.set('toJSON', {
//     transform: function(doc, ret){
//         delete ret.password
//         return ret
//     }
// })

// //use the pre middleware to hash the user password
// userSchema.pre('save', function(next){
//    const user = this
//    if(!user.isModified('password')) return next()
//    bcrypt.hash(user.password, SALT_ROUNDS, function(err, hash){
//        if(err) return next(err)
//        user.password = hash
//        next();
//    })
// })

// userSchema.methods.comparePassword = function(tryPassword, cb){
//     bcrypt.compare(tryPassword, this.password, function(err, isMatch){
//         if(err) return cb(err)
//         cb(null, isMatch)
//     })
// }

module.exports = mongoose.model("User", userSchema);
