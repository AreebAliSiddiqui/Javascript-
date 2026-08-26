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

let name = "areeb ali siddiqui";
name = name.toUpperCase();
console.log(name);


// Question 8 
// Create a nested for loop that prints the multiplication pairs for numbers 1 to 3. The output should show every combination of the two loop counters.

for(let i = 1; i <= 3; i++){
  for(let j = 1; j <= 10; j++){
    console.log(i + " X "+ j + " = " + i*j );
    
  }
} 