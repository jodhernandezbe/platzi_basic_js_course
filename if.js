bool = true;
if (bool) {
    console.log("Hello");
}

bool = false;
if (bool) {
    console.log("Hello");
} else {
    console.log("I'm false");
}

var age = 18;

if (age === 18) {
    console.log("You can vote. It'll be your 1st voting");
} else if (age > 18) {
    console.log("You can vote again");
} else {
    console.log("You can not vote yet");
}

var number = 1;

var result = number === 1 ? "Yes, I'm one": "Not, I'm not one";

console.log(result);