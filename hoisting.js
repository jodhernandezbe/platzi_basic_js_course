var myName;

myName = "Jose";

// hoisting 1

console.log(myName);

var myName = "Jose"

// hoisting 2

hey();

function hey() {
    console.log("Hello " + myName);
}

var myName = "Jose"