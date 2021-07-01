// Global scope

var myName = "Jose"; 

function name() {
    myName = "Daniel";
    return myName;
}

name();

console.log(myName);

// Local scope

var myName = "Jose"

function name() {
    var myLastname = "Hernández"; 
    return myName + " " + myLastname 
}

name();

console.log(myName);
console.log(myLastname); // Reference error