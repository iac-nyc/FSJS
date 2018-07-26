
/* 
When the interpreter encounters a variable assignment without a proper key - the variable name itself is used as the property key 
**/
'use strict';

function submit(name, comments, rating = 5) {
  let data = { name, comments, rating };
  
  for (let key in data) {
    console.log(key + ':', data[key]);
  }
 
}
              
submit('JavaScript','Web development course',10);