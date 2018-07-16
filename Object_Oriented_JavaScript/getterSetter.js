class Pet{

  constructor(animal,age,breed,sound){
    this.animal = animal;
    this.age = age;
    this.breed = breed;
    this.sound = sound; 
  
  }
  
  get activity (){

    const today = new Date();
    const hour = today.getHours();
  
    if(hour >8 && hour <=20){
      return 'Playing';
    } else {
       return 'Sleeping'; 
    
      }
}
get owner(){
  return this._owner;
}
set owner(owner){
  this._owner = owner;
  console.log(`Setter Called: ${owner}`);
}


  
    speak(){
      console.log(this.sound);
  }
}


/* new class */
class Owner {
  constructor(name,address){
    this.name = name;
    this.address = address;
  }
set phone(phone){
  /* using regular expression */
  const phoneNormalized = phone.replace(/[^0-9]/g, '');
  this._phone = phoneNormalized;

}
get phone(){
  return this._phone;
}

}



const ernie = new Pet('dog',2,'pug','Gheow Gheow');
const vera = new Pet('dog',3,'German Shepard', 'Woof woof');

ernie.owner = new Owner('ifte','123 main st');
ernie.owner.phone = '(555) 555-5555';

console.log(ernie.owner);

console.log(vera);
vera.speak();
ernie.speak();

console.log(vera.activity);

ernie.owner ='iftekhar';
console.log(ernie.owner);
  