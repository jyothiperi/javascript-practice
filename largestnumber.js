// To find the largest number of given 3 numbers
  
var num1 = 23;
var num2 = 32;
var num3 = 45;
let  largest;

if (num1 >= num2 && num1 >= num3){
    largest = num1;
}
else if (num2 >= num1 && num2 >= num3){
    largest = num2;
}
else {
    largest = num3;
}
console.log('The largest number is '+  largest);


// program to find the largest among three numbers

// take input from the user
/*const num1 = 23;
const num2 = 32;
const num3 = 45;

const largest = Math.max(num1, num2, num3);

// display the result
console.log("The largest number is " + largest);*/
