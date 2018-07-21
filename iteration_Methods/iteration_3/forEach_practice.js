/* forEach practice */

const numbers = [1, 2, 3, 4, 5];
let total = 0;

// Write loop here:
numbers.forEach(number => {
	total = total + number;
});
console.log(total);

//=============================//

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let dayAbbreviations = [];

// dayAbbreviations should be: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
// Write your code below
days.forEach(day =>{
	let abbDay = day.slice(0,2); // substr() or substring() methods are ok too
 	dayAbbreviations.push(abbDay);

});
console.log(dayAbbreviations);

//================================//

const stringPrices = ['5.47', '3.12', '8.00', '5.63', '10.70'];
let priceTotal = 0;

// priceTotal should be: 32.92
// Write your code below

stringPrices.forEach( stringPrice =>  {
  					const price = parseFloat(stringPrice);
                     priceTotal+= price;
                     
                     });
console.log(priceTotal);

//================================//
const percentages = [34, 67, 12, 39, 90, 82, 22, 24, 99];
let upperRange = [];

// upperRange should be: [67, 90, 82, 99]
// Write your code below
percentages.forEach(percent =>{
	if(percent > 50){
  	upperRange.push(percent);
  }
});
//=====================//
const colors = ['#87E2D0', '#559F4D', '#FFE0F4', '#7E7E7E', '#FF2D2D', '#F7FFEC'];
let filteredColors = [];

// filteredColors should be: ['#FFE0F4', '#FF2D2D', '#F7FFEC']
// Write your code below

colors.forEach(color => {
//if(color.charAt(1)==='F')    
 if (color.startsWith('F', 1)){
    filteredColors.push(color);
     }
});
console.log(filteredColors);
//===========================================//
const months = ['january', 'february', 'march', 'april', 'may'];
let capitalizedMonths = [];

// filteredColors should be: ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY']
// Write your code below
months.forEach(month =>{
	const name = month.toUpperCase();
  capitalizedMonths.push(name);

});
console.log(capitalizedMonths);