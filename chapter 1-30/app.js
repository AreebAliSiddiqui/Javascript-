// Question 1 
// Create an array named cities containing five city names. Use a for loop to print each city on a new line.

// let cities =["Karachi","Islamabad","Lahore","Rawalpindi","Hyderabad"];
// for (let i = 0; i < cities.length; i++){
//     console.log(cities[i]);
    
// }


// Question 2 
// Create a variable named temperature and store a number. If the temperature is 30 or above, print "It is hot"; otherwise print "It is normal".

// let temperature = 45;
// if (temperature >= 30){
//     console.log("It's hot today");
    
// }else{
//     console.log("Tempareture is normal");
    
// }


// Question 3 
// Create two variables, firstName and lastName. Store your name and print the full name using string concatenation.

// let firstName = "Areeb";
// let lastName ="Ali Siddiqui";
// console.log(firstName + " " + lastName);


// Question 4 
// Create a variable named price with a decimal value such as 149.786. Use toFixed() to print the price with exactly two decimal places.

// let price = 149.786;
// console.log(price.toFixed(2));


// Question 5 
// Create an array of numbers. Use a for loop and an if statement to print only the even numbers.

// let numbers =[1,2,5,6,10,13,16,19,22];
// for (let i = 0; i < numbers.length; i++){
//     if(numbers[i] % 2 === 0){
//         console.log(numbers[i]);
        
//     }
// }


// Question 6 
// Use prompt() to ask the user for their age. Convert the input into a number and print the age and its data type using typeof.

// let userAge =prompt("Enter your age brooo!");
// userAge = parseInt(userAge);
// console.log(userAge);
// console.log(typeof userAge);


// Question 7 
// Create a variable named name containing your name in lowercase. Convert it to uppercase and print the result.

// let name = "areeb ali siddiqui";
// name = name.toUpperCase();
// console.log(name);


// Question 8 
// Create a nested for loop that prints the multiplication pairs for numbers 1 to 3. The output should show every combination of the two loop counters.

// for(let i = 1; i <= 3; i++){
//   for(let j = 1; j <= 10; j++){
//     console.log(i + " X "+ j + " = " + i*j );
    
//   }
// }


// Question 9 
// Create an array containing six numbers. Use a loop to count how many numbers are greater than 10. Print the final count.

// let numbers =[5,15,25,7,9,33,55,34];
// let count = 0;
// for (let i = 0; i < numbers.length; i++){
//   if(numbers[i] > 10){
//     count++
//   }
// }
// console.log(count);


// Question 10 
// Create a variable containing a sentence. Find the position of a word inside the sentence using a string method and print the position.

// let sentence ="hello, My name is areeb ali siddiqui";
// console.log(sentence.indexOf("areeb"));
// console.log(sentence.lastIndexOf("i"));
// console.log(sentence.charAt(35));
// console.log(sentence.length);
// console.log(sentence.slice(0,8));
// console.log(sentence.replace("areeb","ahmed"));


// Question 11 
// Create a variable named number with a decimal value. Print the results of Math.round(), Math.floor(), and Math.ceil().

// let number = 12.59;
// console.log(Math.round(number));
// console.log(Math.floor(number));
// console.log(Math.ceil(number));


// Question 12 
// Generate a random integer between 1 and 20 and print it in the console.

// let generateNum =Math.floor(Math.random() * 20) + 1;
// console.log(generateNum);


// Question 13 
// Create a variable containing a string number such as "45.75". Convert it to a decimal number and print its data type.

// let number = "45.75";
// number = parseFloat(number);
// console.log(typeof number);


// Question 14 
// Create an array named students. Use a loop to search for a student name stored in another variable. Use a Boolean flag to remember whether the student was found.

let students =["areeb","ahmed","ali","usman","faiz"];
let search = "ali";
let hasFound = false;
for(let i = 0; i < students.length; i++){
  if(students[i] === search){
    hasFound = true;
  }
}
console.log(hasFound);
