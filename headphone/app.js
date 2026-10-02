function changeProduct(){
    let image =document.getElementById("image");
    image.src="images/soundcore.webp"
    let name =document.getElementById("name").innerHTML ="Soundcore";
    let details =document.getElementById("details").innerHTML ="Noise Cancellation and Better Experince.";
    let price =document.getElementById("price").innerHTML ="2000 PKR";
} 

function previousProduct(){
    let image =document.getElementById("image");
    image.src="images/headphone.jpg"
    let name =document.getElementById("name").innerHTML ="Sonic Pro X";
    let details =document.getElementById("details").innerHTML ="Premium sound & comfort.";
    let price =document.getElementById("price").innerHTML ="1500 PKR";
} 

function greet(){
    let username = document.getElementById("username").value;
    let para = document.getElementById("para1").innerHTML= "Hello, " + username;

     
}    



// <-----------chapter 53--------->

function swapPic(imgId,source){
    let image1 = document.getElementById(imgId);
    image1.src=source;
    
}