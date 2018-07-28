'use strict';

class Bird {
  static changeColor(bird,color) {
    bird.color = color; //remove 'this' with 'bird' - so we don't need to use 'call' method
  }
  constructor({ color = 'red' } = {}) {
    this.color = color;
  }
}

let redBird = new Bird;
console.log(redBird.color);


//redBird.changeColor('yellow'); //-- can't do this on static.

//Bird.changeColor.call(redBird, 'yellow');

Bird.changeColor(redBird, 'yellow');
console.log(redBird.color);