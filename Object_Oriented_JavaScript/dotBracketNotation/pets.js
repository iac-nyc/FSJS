const ernie = {
    animal: 'dog',
    age: '1',
    breed: 'pug',
    bark: function(){
        console.log('Woof!');
    }
}

console.log(ernie.breed);
console.log(ernie.age);
ernie.bark();

/* Bracket Notation */

console.log(ernie['animal']);
console.log(ernie['breed']);
ernie['bark']();

var prop='breed';
console.log(ernie[prop]);