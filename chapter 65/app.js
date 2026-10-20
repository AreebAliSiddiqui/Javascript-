let button = document.getElementById("btn");
button.addEventListener("click",function (){
    let price = 500;
    let quantity = document.getElementById("quantity").value;
    let total = price * quantity;
    let cost =document.getElementById("cost");

    if(quantity > 0){
      if(total >= 2000){
        let discount = total * 0.1;
        total -= discount;
        cost.innerHTML = "Total Price is " + total + " (With 10% discount)";
        console.log("Total Price is " + total + " (With 10% discount)");
        
      }else{
        cost.innerHTML = "Total Price is " + total;
        console.log("Total Price is " + total);
        
      }
    }else{
        console.log("Please enter your quantity!");
        alert("Please enter your quantity!");
        
    }
})


let btn2 = document.getElementById("btn1");
btn2.addEventListener('click',function (){
    let number = document.getElementById("number");
    let generate = Math.floor(Math.random() * 100) + 1;
    console.log(generate);
    if(generate > 50){
        console.log("Higher Number");
        
    }else{
        console.log("lower Number");
        
    }
    number.innerHTML = generate; 
}) 


let btn3 =document.getElementById("btn2");
btn3.addEventListener('click',function (){
    let marks =document.getElementById("marks").value;
    let result =document.getElementById("checker"); 
    if(marks >= 80){
       console.log("Excellent, PASS");
       result.innerHTML = "Check Result: Excellent, PASS"; 
       
    }else if(marks >= 70){
        console.log("Good, PASS");
       result.innerHTML = "Check Result: Good, PASS"; 

    }else if(marks >= 60){
        console.log("Fair, PASS");
       result.innerHTML = "Check Result: Fair, PASS";

    }else if(marks >= 50){ 
        console.log("Need improvement, PASS");
       result.innerHTML = "Check Result: Need improvement, PASS";

    }else if(marks < 50){
        console.log("Fail, Focus on your studies");
        result.innerHTML ="Check Result: Fail, Focus on your studies";
        
    }
})