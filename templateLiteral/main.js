

const singleQuotes = '<p>Single quotes :  \' - \'</p>'
const doubleQuotes = "<p>Double quotes :  \"  - \"</p>";
const templateQuotes = `<p>Template quotes  :  \` - \`</p>`; // template singline sample

const result = singleQuotes + doubleQuotes + templateQuotes;
document.querySelector('.basic').innerHTML = result;





const fruitList = 
  "<ul>" +
    "<li>Kiwi</li>" +
    "<li>Lime</li>" +
    "<li>Pineapple</li>" +
  "</ul>";

//
//template multiline sample
//
const vegetableList = `
  <ul>
    <li>Okra</li>
    <li>Malanga</li>
    <li>Taro</li>
  </ul>
`;


document.querySelector('.fruits').innerHTML = fruitList;
document.querySelector('.vegetables').innerHTML = vegetableList;

//
// old style  sample
//
function like(thing) {
  return 'I like ' + thing;
}

//
// Interpolation sample
//
function love(thing) {
  return `I love ${thing}`;
}
//const sentence = `<p>` + like(`apples`) + `.</p>`;

    
const sentence = `<p>${like('apples')}, but ${love('oranges')}. </p>`;
document.querySelector('.interpolation').innerHTML = sentence;