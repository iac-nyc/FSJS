var person = {
  name : 'Sarah',
  country : 'US',
  age : 35,
  treehouseStudent : true,
  skills : ['JavaScript', 'HTML', 'CSS']
};

function print(message) {
  var div = document.getElementById('output');
  div.innerHTML = message;
}



var message = '<p> Hello. My name is ' +person.name +'</p>';

message += '<p> I live in ' + person.country +'</p>';
person.name = 'James Bond';
message +="<p> But, I wish my name was " + person.name +"</p>";
person.age +=1;
message += "<p> My age is: " + person.age +"</p>";

message += '<h2> I have ' + person.skills.length + ' skills in ' + person.skills.join(', ') + '</h2>';
print(message);