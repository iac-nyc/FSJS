/*
 * Programming Quiz: Writing a For...of Loop (1-4)
 */

const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

// your code goes here
for(const day of days){
    let capDay = day.charAt(0).toUpperCase()+ day.slice(1);
    console.log(capDay);
  
}