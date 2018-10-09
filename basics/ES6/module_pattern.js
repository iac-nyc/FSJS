let person = (function () {
  let name = 'Iftekhar';

  return  {
    getName: function () {
      return name;
    },
    setName: function (myName){
      name = myName;
    }
  };
})();

person.name;
// undefined
person.getName;
// 'Iftekhar'

person.setName('Not Iftekhar');
person.getName;
// 'Not Iftekhar'