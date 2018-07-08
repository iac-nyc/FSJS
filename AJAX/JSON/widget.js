/*
*****
*****
// Using JSON


var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if(xhr.readyState === 4 && xhr.status === 200) {
    var employees = JSON.parse(xhr.responseText);
    var statusHTML = '<ul class="bulleted">';
    for (var i=0; i<employees.length; i += 1) {
      if (employees[i].inoffice === true) {
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }
      statusHTML += employees[i].name;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('employeeList').innerHTML = statusHTML;
  }
};


xhr.open('GET', 'employee.json');
xhr.send();
//
var roomFinder = new XMLHttpRequest();
roomFinder.onreadystatechange = function () {
  if(roomFinder.readyState === 4 && roomFinder.status === 200) {
    var rooms = JSON.parse(roomFinder.responseText);
    var roomHTML = '<ul class="rooms">';
    for (var i=0; i<rooms.length; i += 1) {
      if (rooms[i].available === true) {
        roomHTML += '<li class="empty">';
      } else {
        roomHTML += '<li class="full">';
      }
      roomHTML += rooms[i].room;
      roomHTML += '</li>';
    }
    roomHTML += '</ul>';
    document.getElementById('roomList').innerHTML = roomHTML;
  }
};
roomFinder.open('GET', 'rooms.json');
roomFinder.send();

*********
******
*/


//using jQuery
// in order for this code to work need add jquery plugin/ CDN
$( document ).ready(function() {
    console.log( "ready!" );
});

$(document).ready(function(){
    
  var url = "employee.json";
    
  $.getJSON(url,function(response){
    
      var statusHTML = '<ul class ="bulleted">';
    $.each(response, function (index, employee){
   
         if(employee.inoffice ===true){
            statusHTML += '<li class ="in">';
         }else{
            statusHTML +='<li class="out">'
         }
            statusHTML += employee.name + '</li>'
    
                  });  
            statusHTML+='</ul>';
            $('#employeeList').html(statusHTML);
  
            });//end getJSON    
            
            
            
//
  var roomFinder = "rooms.json";
    
  $.getJSON(roomFinder,function(response){
    
      var statusHTML = '<ul class ="rooms">';
    $.each(response, function (index, room){
   
         if(room.available ===true){
            statusHTML += '<li class ="empty">';
         }else{
            statusHTML +='<li class="full">'
         }
            statusHTML += room.room + '</li>'
    
                  });  
            statusHTML+='</ul>';
            $('#roomList').html(statusHTML);
  
            });//end getJSON  
    
});// end ready









