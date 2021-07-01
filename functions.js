// Declarative

function myFuction() {
    return 3;
}

myFuction();

greetingStudents("Daniel")
function greetingStudents(student) {
    console.log(`Hi ${student}!`);
}

console.log(sum(1, 2));
function sum(a, b) {
    var result = a + b;
    return result;
}

// Expresive

console.log(myFuction(1, 2));
var myFuction = function(a, b){
    return a + b;
}

myFuction();