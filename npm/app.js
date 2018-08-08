let unsecurePlainTextPassword = "password";
let colors = require('colors');
var bcrypt = require('bcrypt');
bcrypt.genSalt(10, function(error, salt){
  bcrypt.hash('B4c0/\/',salt, function(error, hash){
    console.log(hash.magenta.bgCyan);
  
  });


});

//
//var bcrypt = require('bcrypt');
//const saltRounds = 10;
//const myPlaintextPassword = 's0/\/\P4$$w0rD';
//const someOtherPlaintextPassword = 'not_bacon';