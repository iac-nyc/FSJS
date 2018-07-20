const numbers = [1,2,3,4,5,6,7,8,9,10];
let times10 = [];

// times10 should be: [10,20,30,40,50,60,70,80,90,100]

numbers.forEach(num => {
  let ans = num * 10;
  times10.push(ans);

});
console.log(times10);

//====Filter Method ====//

const years = [1989, 2015, 2000, 1999, 2013, 1973, 2012];
let century20;

// century20 should be: [1989, 2000, 1999, 1973]

century20 = years.filter(year => year <=2000);
console.log(century20);


//========Map Method ====//
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let abbreviatedDays;

// abbreviatedDays should be: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

abbreviatedDays = daysOfWeek.map(day => day.slice(0, 3));
console.log(abbreviatedDays);


//====Reduce Method ====//
const phoneNumbers = ["(503) 123-4567", "(646) 123-4567", "(503) 987-6543", "(503) 234-5678", "(212) 123-4567", "(416) 123-4567"];
let numberOf503;

// numberOf503 should be: 3
numberOf503=phoneNumbers.reduce((count,numbers)=>{
	//if(numbers.substring(0,5) ==='503')
  if (numbers.startsWith('(503)')){
  	return count +1;
  }else{
  	return count;
  }
},0);
console.log(numberOf503);



