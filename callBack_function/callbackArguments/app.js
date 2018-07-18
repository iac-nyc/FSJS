 
const div1 = document.getElementById('first');
const div2 = document.getElementById('second');
const div3 = document.getElementById('third');

function makeRed(element) {
    element.style.backgroundColor = "red";
}

function makeBlue(element) {
    element.style.backgroundColor = "blue";
}
function makeYellow(element) {
    element.style.backgroundColor = "yellow";
}

function addStyleToElement(element, callback) {
    callback(element);
}

addStyleToElement(div2,makeBlue);
addStyleToElement(div1,makeRed);
addStyleToElement(div3,makeYellow);