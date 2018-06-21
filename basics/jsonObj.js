/*
** in the real world keep the students data in a separate js file 
***/

var students = [
  
     {
       name: 'James',
       track: 'Front End',
       achievements: 50,
       points: 5000
    },
    {
       name: 'Bond',
       track: 'JS Fullstack',
       achievements: 5,
       points: 2000
    },

    {
       name: 'Arnold',
       track: 'AI',
       achievements: 15,
       points:9800
    },

    {
       name: 'Tolkin',
       track: 'Fiction',
       achievements: 500,
       points: 500500
    },

    {
       name: 'Rowling',
       track: 'HPotter',
       achievements: 7,
       points: 9876
    }


];

// And this file in another js file

var student;
var message;


for(var i=0;i<students.length ;i++){
  student = students[i];
  message += '<h2> Student: ' + student.name + '</h2>';
  message += '<p> Achievements: ' + student.achievements + '</p>';
  message += '<p> Track : ' + student.track + '</p>';
  message += '<p> Points: ' + student.points + '</p>';

 

}
 print(message);






function print(message) {
  var outputHTML = document.getElementById('output');
  outputHTML.innerHTML=message ;
}




























