var html = '';
var red;
var green;
var blue;
var rgbColor;


for (var i=0;i<10;i++){

  red = getColor();//Math.floor(Math.random() * 256 );
  green = getColor();//Math.floor(Math.random() * 256 );
  blue = getColor();//Math.floor(Math.random() * 256 );
  rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  html += '<div style="background-color:' + rgbColor + '"></div>';

}

function getColor(){

  var color = Math.floor(Math.random() * 256 );
  return color;


}
document.write(html);

/*
** updated version
**
****
var html = '';
var rgbColor;


for (var i=0;i<10;i++){

  red =  getColor();
  green = getColor();
  blue = getColor();
  rgbColor = randomColor();
  html += '<div style="background-color:' + rgbColor + '"></div>';

}


function getColor(){
  var color = Math.floor(Math.random() * 256 );
  return color;


}

function randomColor(){
  var color = 'rgb(';
  color += getColor() + ",";
  color += getColor() + ",";
  color += getColor() ;
  color +=   ')';
  return color;

}

function print(message){
    document.write(message);
}

print(html);





*/