// 1) Create this array:

let students = ["Ali ", "Hassan", "Usman", "Bilal"];
for (let i = 0; i < students.length; i++){
    if(students[i] === "Usman"){
        console.log("usman is found");
        
    }else{
        console.log("usman not found");
        
    }
}

// 2) Create this array:

// let numbers = [10, 20, 30, 40, 50, 60];
// let isFound = false;

// for (let i = 0; i < numbers.length ; i++){
//  if(numbers[i] === 40){
//     isFound = true;
//     break;
//  } 
// }
// console.log(isFound);


// 3) Create this array:

let numbers = [10, -5, 20, -8, 30, -2, 40];
for (let i = 0; i < numbers.length; i++){
    if (numbers[i] > 0){
        console.log("positive: ", numbers[i]);
        
    }else {
        console.log("Negative: ", numbers[i]);
        
    }
}


// 4) Create:

let marks = [85, 45, 72, 30, 90, 55];
for (let i = 0; i < marks.length; i++){
    if (marks[i] >= 50){
        console.log(marks[i] + " - Pass");
        
    }else {
        console.log(marks[i] + " - Fail");
        
    }
}


// 5) Reverse Loop
// Use a for loop to print numbers from 10 down to 1.

for (let i = 10; i >= 1; i--){
    console.log(i);
    
}

//6) Use nested for loops to produce this output:

for(let i = 3; i <= 5; i++ ){
    for (let j = 1; j <= 3; j++){
        console.log(i,j);
        
    }
}

