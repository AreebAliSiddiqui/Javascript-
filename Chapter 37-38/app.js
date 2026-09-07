// 1) Create a function named userName that takes one parameter name, and take one argument value is "Hassan".
// When the function is called, it should print: Hello Hassan

// function userName(name){
//     console.log(name);
    
// }
// userName("Hassan");


// 2) Create a function named addWords that takes two parameters.
// Pass "Hello" and "World" to the function and print boths word concat.

// function addWords(one,two){
//     console.log(one +" "+ two);
    
// }
// addWords("Hello","World")


// 3) Create a function named multiply that takes two parameters and returns their multiplication. Store the returned value in a variable and print it.

// function multiply(value1,value2){
    
//     return value1 * value2
// }
// let result = multiply(5,8);
// console.log(result);


// 4) Create a function named calculateSquare that takes a number and returns its square.
// Call the function with 6.

// function calculateSquare(value){
//     return value ** 2;
// } 
// let result = calculateSquare(25);
// console.log(result);

// 5) Create a function named checkAge that takes age.
// If age is 18 or greater, return:
// "You are eligible"
// otherwise return
// "You are not eligible"
// Call the function with 20.

// function checkAge(age){
//     if(age >= 18){
//         return "You are eligible"
//     }else{
//         return "You are not eligible"
//     }
// }
// let result = checkAge(15);
// console.log(result);


// 6) Create a function named printNumbers that takes a number limit.
// Use a for loop inside the function to print numbers from 1 to limit.
// Call:
// printNumbers(5);

// function printNumbers(limit){
//     for(let i = 1; i <= limit; i++){
//         console.log(i);
//     }
// }
// printNumbers(5);


// 7) let students = ["Hassan", "Ali", "Ahmed", "Sara"];
// Create a function named showStudents.
// The function should use a loop to print every student.
// Call the function.

// let students = ["Hassan", "Ali", "Ahmed", "Sara"];

// function showStudents(){
//     for (let i = 0; i < students.length; i++){
//         console.log(students[i]);
        
//     }
// }
// showStudents();


// 8)Look at this code
// function test() {
// let message = "Hello";
// console.log(message);
// }
// test();
// Answer:
// Is message a local or global variable?
// Can we use message outside the function?
// What happens if we write:
// console.log(message);
// outside the function?
// Don't just run the code. Explain first.

// function test() {
// let message = "Hello";
// console.log(message);
// }
// test();
// console.log(message);// it gives a undefined error becuz message variable is declare inside a function so it can only be access inside not outside.
// message is a local variable cuz it is used inside a function of block