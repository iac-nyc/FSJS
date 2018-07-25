'use strict';

function greet(name = 'Iftekhar', timeOfDay = 'Evening') {
//  name = name || ;
//  timeOfDay = timeOfDay || ;
  console.log(`Good ${timeOfDay}, ${name}!`);
}
greet('James Bond','Day');
greet();
greet(undefined, 'Afternoon');
