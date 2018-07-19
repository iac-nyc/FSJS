const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];    // Result: ['Selma', 'Sam', 'Sharon'];
let sName=[];
  
//names.forEach(name=>{  
//    if(name.startsWith('S')){
//      sName.push(name);
//    }  
//  });
//console.log(sName);

names.forEach(name => {
  if(name.charAt(0) === 'S'){
    sName.push(name);
  }

});
console.log(sName);



names.forEach((name,index) => {
  console.log(`${index+1}>>>> ${name}`);
});
