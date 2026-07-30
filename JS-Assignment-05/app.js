// Question 1

let age = 19;
if(age >= 18){
    console.log("You are eligible to vote");
    
}

// Question 2
let marks =prompt("Enter your marks");
if(marks >= 50){
console.log("you are pass");
alert("you are pass")
}else{
    console.log("fail");
    
}

// Question 3

let temp = prompt("Enter today's temperature")
if(temp > 30){
    console.log("Hot weather");
    
}else{
    console.log("cool weather");
    
}

// Question 4
 let score = prompt("Enter score")
 if (score >= 90){
    console.log("Excellent");
    
 } else if (score >= 80){
    console.log("Very good");
    
 } else if (score >= 70){
    console.log("Good");
    
 }else {
    console.log("Need improvement");
    
 }

//  Question 5
let isStudent = true;
if (isStudent == true){
    console.log("you are a student");
}else{
    console.log("you are not a student");
    
}

// Question 6
let hasCNIC = true;
let hasLicense = false;
if (hasCNIC && hasLicense){
    console.log("you are eligible to drive");
    
}else{
    console.log("you are not eligible"); 
}

// Question 7
let isWeekend = true;
let isHoliday = false;
if (isWeekend || isHoliday){
    console.log("Enjoy your day off!");
    
} else {
    console.log("Go to work");
    
}

// Question 8
let userAge = prompt("Enter age")
if (userAge >= 18){
    console.log("Adult");
    
}else {
    console.log("minor");
    
}

// Question 9

let name = prompt("Enter name")
let Age1 = prompt("Enter age")
let city =prompt("Enter city")
if (Age1 >= 18){
    console.log("Welcome "+ name +"!" );
    console.log("you are eligible");
    console.log("city: "+ city);
    
    
}else{
    console.log("sorry "+ name +"!");
    console.log("you are not eligible");
   
}
