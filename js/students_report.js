var html = "";
var searchValue;
var searchFound = false;

function print(message) {
  document.getElementById("output").innerHTML = message;
}
  
function printStudents(type) {    
  var html = "<h1>All students:</h1>";
  
  for (var i = 0; i < students.length; i++) {
    html += getStudent(i);
  }
  
  print(html);
}

function getStudent(index) {
    var student = 
          "<h3>" + students[index].name  + "</h3>" +
          "<ul><li>Track: " + students[index].track + 
          "</li><li>Achievements: " + students[index].achievements + 
          "</li><li>Points: " + students[index].points + "</li></ul>";
  
  return student;
}

do {
  searchValue = prompt("Which student you are looking for? (to end type 'end', to print all student type 'all')");
  
  if (searchValue === null || searchValue.toLowerCase() === "end") {
    
    break;
    
  } else if (searchValue.toLowerCase() === "all") {
    
    printStudents();
    break;
    
  } else {
    
    for (var i = 0; i < students.length; i++) {
      
      if (students[i].name.toLowerCase() === searchValue.toLowerCase()) {
        html += getStudent(i);
        print(html);
        searchFound = true;
        
      }
    }
  }
} while (!searchFound);