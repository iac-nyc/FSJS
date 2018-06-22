/* getElementById */
//const myHeading = document.getElementById('myHeading');

//getElementsByTagName
const myHeading = document.getElementsByTagName('h1')[0];
const myButton  = document.getElementById('myButton');
const myTextInput = document.getElementById('myTextInput');
const reset = document.getElementById('reset');

myButton.addEventListener('click', () =>{
                           myHeading.style.color = myTextInput.value;
                           
});

reset.addEventListener('click', () =>{
                           myHeading.style.color = 'black';
                           
});