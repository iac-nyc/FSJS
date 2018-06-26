/*
**
***
var message = "";
var student;
var search;
var groupStudents = [];

function print(message) {
  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML = message;
}

function getStudentReport (student) {
    var report = "<h2>Student: " + student.name + "</h2>";
    report += "<p>Track: " + student.track + "</p>";
    report += "<p>Achievement: " + student.achievement + "</p>";
    report += "<p>Points: " + student.points + "</p>"; 
    return report; 
  }

while (true) {
  search = prompt("Type in the name of the student to search. Type 'quit' if you'd like to quit");
  if (search === null || search.toLowerCase() === "quit") {
    break;      
  } 
  for (var i = 0; i < students.length; i += 1) {
    student = students[i];
    if (search.toLowerCase() === student.name) {
      groupStudents.push(student); 
    } 
  } 

  if (groupStudents.length>0) {
  for (var i = 0; i < groupStudents.length; i += 1) {
    message = getStudentReport(groupStudents[i]);
    print(message);
  }
} else {
  alert("This student name " + search + " is not in our record."); 
}

}
****/
var message = '';
var student;
var search;
var noStudentFound = false;
var studentFound = false;

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function getStudentReport(student) {
  var report = '<h2>Student: ' + student.name + '</h2>';
  report += '<p>Track: ' + student.track + '</p>';
  report += '<p>Points: ' + student.points + '</p>';
  report += '<p>Achievements: ' + student.achievements + '</p>';
  return report;
}

while (true) {
  search = prompt('Search student records: type a name [Jody] (or type "quit" to end)');
  if (search === null || search.toLowerCase() === 'quit') {
    break;
  } 
  for (var i = 0; i < students.length; i += 1) {
    student = students[i];
    if (student.name === search) {
      message += getStudentReport(student);
      print(message); 
    }
    if (student.name === search) {
    studentFound = true;
    } else {
      noStudentFound = true;
    }
  }
  if (studentFound === true) {
  break;
  }
  if (noStudentFound === true) {
  alert('No student named ' + search + ' was found');
  }
}
