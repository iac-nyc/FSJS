'use strict';

let toybox = { item1: 'car', item2: 'ball', item3: 'frisbee' };

//let {item1, item3} = toybox;
let {item3:disc}=toybox;

console.log(disc); // frisbee