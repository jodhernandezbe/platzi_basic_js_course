var students = ["Maria", "Sergio", "Rosa", "Daniel"];

function greetStudents(student) {
    console.log(`Hello, ${student}`);
}

while(students.length > 0){
    var student = students.shift();
    greetStudents(student)
}