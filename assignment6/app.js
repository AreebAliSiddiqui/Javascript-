// Question 1
// Create the following variables and print them in the console.

let firstName = "Areeb";
let lastName = " Ali Siddiqui";
let age = 19;
let city = "karachi";
console.log(firstName + lastName);
console.log("Age:" + age +", "+ "City:" + city);

// Question 2
// Create two number variables.

let num1 = 50;
let num2 = 10;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

// Question 3
// Create one variable.

let count = 10;
console.log(count++);
console.log(count);
console.log(++count);
console.log(count--);
console.log(count);
console.log(--count);


// Question 4
// Predict the output first, then run the code.

let x = 5;
console.log(x++);
// x=5, cuz post incre fisrtly print the value then add them.
console.log(++x);
// x=7, cuz pre incre directly adds them and then print the value.
console.log(x);
// x=7

// Question 5
// Find the output.

console.log((10 + 5) * 2);
// Answer=30
console.log(20 - 10 / 2);
// Answer=15
console.log((20 - 10) / 2);
// Answer=5

// Question 6
// Create two string variables.

let firstName1 = "Hassan";
let lastName1 = "Lashkarwala";
console.log("Hello" +" "+ firstName1 +" "+ lastName1 );


// Question 7
// Use prompt().

let userName = prompt("Enter your Name please")
let userCity = prompt("Enter your city")
console.log("Hello" +" "+ userName);
console.log("Welcome to" +" "+ userCity );


// Question 8
// Use prompt() and if statement.

let userAge = prompt("Enter your age")
if (userAge >= 18) {
alert("You are eligible to vote")    
}

// self made question 

let userMarks = prompt("Enter your marks")
if (userMarks > 60 ){
    alert("You are passed the exam")
}

// Question 9

let name = prompt("Enter your name")
let language = prompt("Enter your fav programming language")
console.log("hello"+" "+ name +"!");
console.log("Your fav programming language is " + language +".");
