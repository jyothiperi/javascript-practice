// swapping two number
var a = 4;
var b = 6;
[a, b] = [b, a];

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);

//another way

var c = 8;
var d = 2;
//create a temporary variable
let temp;

//swap variables
temp = c;
c = d;
d = temp;

console.log(`The value of c after swapping: ${c}`);
console.log(`The value of d after swapping: ${d}`);