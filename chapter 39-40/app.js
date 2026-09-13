// let dayOfWeek = "Saturday";

// switch(dayOfWeek){
//     case "Saturday":
//         console.log("Today is Saturday");
//          break;

//     case "Sunday":
//         console.log("Today is Sunday, Funday");
//          break;

//     case "Monday":
//         console.log("Today is monday, Working day");   
//         break; 

//     default :
//     console.log("No day!!");
// }


// let myCar =prompt("Enter yoyr car name");

// switch (myCar){
//     case "Mehran" :
//     console.log("nice");
//     break;

//     case "corolla":
//     console.log("nice car");
//     break;

//     case "Alto":
//     console.log("Good");
//     break;    
// } 


//------------------------------------ While loop---------------------------------------//

// let i = 1;
// while(i <= 20){
//     if(i % 2 == 0){
//         console.log(i);
        
//     }
//     i++;
// }

// function print(number){
//     let i = 1;
//     while(i <= number){
//         console.log(i);
//     i++;    
//     }
    
// }
// print(10)


let sum = 0;
function add(number){
    let i = 1;
    while (i <= number){
        sum = sum + i;
    i++;
    }
return sum;
}
let result = add(10);
console.log(result);
