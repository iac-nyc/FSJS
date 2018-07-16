class Pet{

  constructor(animal,age,breed,sound){
    this.animal = animal;
    this.age = age;
    this.breed = breed;
    this.sound = sound;
  
  
  }
  
  speak(){
    console.log(this.sound);


}
  

}
const ernie = new Pet('dog',2,'pug','Gheow Gheow');
const vera = new Pet('dog',3,'German Shepard', 'Woof woof');

console.log(vera);
vera.speak();
ernie.speak();