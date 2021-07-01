// Example 1
var a = 4 + "7";

typeof a;

// Example 2: Implicit coercion
var b = 4 * "7";

typeof b;

// Example 3: Explicit coercion
var a = 20;
var b= a + "";

console.log(b);

typeof b;

var c = String(a);

console.log(c);

var d = Number(c);

typeof d;