// form saltedPassword = hash(salt + password)

const bcrypt = require('bcrypt')

var max = 10

const saltRounds = max
const myPassowrd = '123456'
console.log(saltRounds, myPassowrd)

// bcrypt.hash(myPassowrd, saltRounds, function(err, hash) {
//   // Store hash in your password DB.
//   console.log(hash)
//   if (err) {
//     console.log(err)
//     return
//   }
// });

// generate salt
bcrypt.genSalt(saltRounds, function(err, salt) {
  bcrypt.hash(myPassowrd, salt, function(err, hash) {
      // Store hash in your password DB.
      console.log("salt", salt)
      console.log("hash", hash)
      console.log(`update student set saltedPassword = \"${hash}\" where userID = 1;`)
  });
});
