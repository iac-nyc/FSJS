const btn1 = document.getElementById("button1");
const btn2 = document.getElementById("button2");
const btn3 = document.getElementById("button3");

function spinElement(event) {
  //Applies spinning animation to button element
  event.target.className = "spin";
}

btn1.addEventListener('click',spinElement);
btn2.addEventListener('click',spinElement);
btn3.addEventListener('click',spinElement);