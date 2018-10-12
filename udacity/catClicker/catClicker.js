var elem = document.getElementById('my-elem');
var  count = 0;
elem.addEventListener('click', function(){
  //the element has been clicked... do stuff here
   count+=1;
 
    counting = document.getElementById("count");
    counting= `The number of times the cat was clicked ${count}`;
     document.getElementById("count").innerHTML = counting;
       
}, false);