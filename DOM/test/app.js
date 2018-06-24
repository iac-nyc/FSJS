const list = document.getElementsByTagName('ul')[0];


list.addEventListener('click', function(e) {
  if (e.target.tagName === 'BUTTON') {
    let p = e.target.previousElementSibling;
    p.className = "highlight";
  }
});



const section = document.querySelector('section');
let paragraphs =section.getElementsByTagName('p');
// paragraphs = section.children;
for (let i=0;i<paragraphs.length;i++){
    
    paragraphs[i].style.color='blue';
}
