const saltRounds = 10;
const originalHash = '$2a$10$7h/0SQ4FXRG5eX3602o3/.aO.RYkxKuhGkzvIXHLUiMJlFt1P.6Pe';
console.log('Original Hash: ' + originalHash);

//1. Install and include the bcrypt npm package
var bcrypt = require('bcrypt');

//2. Hash the string 'password' and display to screen
console.log("Hash of string 'password': " + bcrypt.hashSync('password', saltRounds));

//3. Hash the string 'bad_password' and display to screen
console.log("Hash of string 'bad_password': " + bcrypt.hashSync('bad password', saltRounds));

//4. Use bcrypt to compare the string 'password' with the variable originalHash
console.log("Bcrypt Compare string 'password': " + bcrypt.compareSync('password', originalHash));

//5. Use bcrypt to compare the string 'bad_password' with the variable originalHash
console.log("Bcrypt Compare string 'bad_password': " + bcrypt.compareSync('bad_password', originalHash));