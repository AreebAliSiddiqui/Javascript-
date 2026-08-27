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

// let students =["areeb","ahmed","ali","usman","faiz"];
// let search = "ali";
// let hasFound = false;
// for(let i = 0; i < students.length; i++){
//   if(students[i] === search){
//     hasFound = true;
//   }
// }
// console.log(hasFound);


// Question 15 
// Create a variable named score. Use if / else if / else to print different messages for scores of 80+, 60+, 40+, and below 40.

// let score =prompt("Enter your marks");
// if(score >= 80){
//   console.log("Excellent");
  
// }else if(score >= 60){
//   console.log("Good");
  
// }else if(score >= 50 ){
//   console.log("Need improvement");
  
// }else{
//   console.log("you are failed, focus on your studies");
  
// }


// Question 16 
// Create a string and print the character at index 2. Then print the character at the last index without manually writing the last index number.

// let car = "corolla";
// console.log(car.charAt(2));
// console.log(car.lastIndexOf("a"));


// Question 17 
// Create an array of five elements. Add one new element at the end and one new element at the beginning. Print the final array.

// let cars =["mehran","khyber","corolla","alto"];
// console.log(cars.push("BMW"));
// console.log(cars.unshift("cultus"));
// console.log(cars);


// Question 18 
// Create an array containing several values. Remove the last element and the first element, then print the updated array.

// let array =["car","bike","aeroplane","rocket"];
// array.pop();
// array.shift();
// console.log(array);


// Question 19 
// Create an array of at least six elements. Use splice() to remove two elements from the middle and insert one new element in their place.

// let animals =["dog","cat","lion","tiger","bear","panda"];
// animals.splice(2,2,"fox");
// console.log(animals);


// Question 20 
// Create a string containing your full name. Replace one part of the string with another word and print the new string.

// let name ="Areeb Ali Siddiqui";
// name = name.replace("Areeb","usman");
// console.log(name);


// Question 21 
// Create a variable named isLoggedIn and store a Boolean value. Use an if statement to print either "Welcome" or "Please login".

// let isLoggedIn = false;
// if (isLoggedIn == true){
//   console.log("welcome");
  
// }else{
//   console.log("please login");
  
// }


// Question 22 
// Create two variables, age and hasPermission. Use a nested if statement to allow access only when the user is old enough and has permission.

// let age = 15;
// let hasPermission = false;
// if(age > 18){
//   hasPermission =true;
//   if(hasPermission == true){
//     console.log("you are eligible to visit this site");
    
//   }
// }else{
//     console.log("you are not allowed");
    
//   }


// Question 23 
// Create an array of numbers and use a for loop to print the array values from the last element to the first element.

// let numbers =[1,2,3,4,5,6,7,8,9];
// for(let i = 8; i >= 0; i-- ){
//   console.log(numbers[i]);
  
// }


// Question 24 
// Create a string containing mixed uppercase and lowercase letters. Convert the complete string to lowercase and then replace one word inside it.

// let sentence = "Hello, How Are You";
// console.log(sentence.toLowerCase());
// sentence = sentence.replace("How","who");
// console.log(sentence);


// Question 25 
// Use prompt() to ask the user for a number. Convert it to an integer, then check whether it is positive, negative, or zero.

// let number =prompt("Enter a random number");
// number = parseInt(number);
// if (number > 0){
//   console.log("it's positive");
  
// }else if(number < 0){
//   console.log("it's negative");
  
// }else{
//   console.log("it is zero");
  
// }



// Question 26
// Create a variable containing a decimal number. Convert the number to a string and print its value and its data type.

// let number = 12.7;
// number = number.toString();
// console.log(number);
// console.log(typeof number);


// Question 27 
// Create an array of names. Use a loop with a Boolean flag to check whether the name "Hassan" exists. Print "Found" or "Not Found".

// let students =["areeb","ali","hassan","usman"];
// let isfound = false;
// for (let i = 0; i < students.length; i++){
//   if(students[i] === "hassan"){
//     isfound = true;
//     console.log("hassan is found");
    
//   }else{
//     console.log("not found");
    
//   }
// }
// console.log(isfound);


// Question 28 
// Create a nested loop that prints a 3 × 3 pattern of stars. Do not write nine separate console.log() statements.

// let star1 =["*"];
// let star2 =["*"];
// let stars =["*","*","*"];
// for (let i = 0; i < star1.length; i++){
//   for(let j = 0; j < star2.length; j++){
//     for(let k = 0; k < stars.length; k++){
//       console.log(star1[i],star2[j],stars[k]);
      
//     }
//   }
// }


// Question 29 
// Create a random number between 1 and 100. Use an if / else statement to tell whether the number is greater than 50 or 50 and below.

// let randomNum = Math.floor(Math.random() * 100) + 1;
// console.log(randomNum);
// if (randomNum == 50){
//   console.log("Number is equal to 50");
  
// }else if(randomNum > 50){
//   console.log("Number is greater than 50");
  
// }else{
//   console.log("Number is less than 50");
  
// }


// Question 30 
// Create a small program that asks the user for a price and quantity using prompt(). Convert both inputs to numbers, calculate the total price, and print the total with two decimal places.

let price = prompt("Enter the price of the product which you want to buy");
let quantity = prompt("Enter the quantity of your product")
price = parseFloat(price);
quantity = parseInt(quantity);
let totalPrice = price * quantity;
let total ="The Total Price of the product is " + totalPrice;
totalPrice = totalPrice.toFixed(2);
console.log(total);
 