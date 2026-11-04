// let students = {
//     name: "areeb",
//     age: 19,
//     course: "Web dev",
//     city: "karachi"
// }

// console.log(students);
// console.log(students.age);
// console.log(students["course"]);

// students.result = "preparing";
// console.log(students);
// delete students.city;
// console.log(students);


// // make a dynamic key value

// let findAge = "age";
// console.log(students.findAge);
// console.log(students[findAge]);

// let mobile = {
//     model: "samsung",
//     battery: 5000,
//     display: "led",
//     message: function(){
//         console.log(this.battery);
        
//     },
// }
// mobile.message();


 let mobile = {
    model: "samsung",
    battery: 5000,
    delivery: 500,    
    message: function(){
       mobile.display = "led";
       mobile.cost = 10000;

       let total = this.delivery + this.cost;
       console.log(total);
       
    },
}
mobile.message();
console.log(mobile);

let screen = "display";
let price = "cost";
console.log(mobile[screen]);
console.log(mobile[price]);
