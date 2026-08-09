// Question 1 — Basic Loop
// Write a for loop that prints numbers from 1 to 10 in the console.

for ( let i = 1; i <= 10; i++){
console.log(i);

}

// Question 2 — Even Numbers
// Write a for loop that prints only the even numbers from 1 to 20.

for (let i = 0; i <= 20; i++ ){
    if (i %2 === 0){
        console.log(i);
        
    }
}

// ----------------or------------------------//

for (let i = 0; i <= 20; i++, i++ ){
        console.log(i);
}

// Question 3 — Array + Loop

let fruits = ["Apple","Mango","Banana","Orange","Grapes"]

for (let i = 0; i < fruits.length; i++ ){
    console.log(fruits[i])
}


// Question 4

let numbers = [10, 55, 30, 45, 50, 15, 70, 77];

for (let i = 0; i < numbers.length; i++ ){
    if (numbers[i] > 40){
        console.log(numbers[i]);
        
    }
    
}  