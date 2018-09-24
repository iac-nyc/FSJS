/*
    Defaults and destructuring objects
*/


function houseDescriptor({houseColor = 'green', shutterColors = ['red']} = {}) {
  return `I have a ${houseColor} house with ${shutterColors.join(' and ')} shutters`;
}

houseDescriptor({});    // "I have a green house with red shutters"
houseDescriptor({shutterColors:['orange','blue']}); // "I have a green house with orange and blue shutters"
houseDescriptor();  // "I have a green house with red shutters"
houseDescriptor({houseColor:'red'});    //"I have a red house with red shutters"
houseDescriptor({houseColor:'red',shutterColors:['white','grey','pink']});  // "I have a red house with white and grey and pink shutters"








function createSundae({scoops = 1, toppings = ['Hot Fudge']}) {
  const scoopText = scoops === 1 ? 'scoop' : 'scoops';
  return `Your sundae has ${scoops} ${scoopText} with ${toppings.join(' and ')} toppings.`;
}

createSundae({}); // Your sundae has 1 scoop with Hot Fudge toppings.
createSundae({scoops: 2}); // Your sundae has 2 scoops with Hot Fudge toppings.
createSundae({scoops: 2, toppings: ['Sprinkles']}); // Your sundae has 2 scoops with Sprinkles toppings.
createSundae({toppings: ['Cookie Dough']}); // Your sundae has 1 scoop with Cookie Dough toppings.



createSundae(); // Your sundae has 1 scoop with Hot Fudge toppings.