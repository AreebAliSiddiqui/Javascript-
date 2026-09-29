
function changeprofile(){
   let role = document.getElementById("role").innerHTML = "UI DESIGNER";
   let descrip = document.getElementById("descrip").innerHTML = "Designing simple and user-friendly interfaces.";
   let heading = document.getElementById("head");
   heading.innerHTML = "MY CREATIVE PROFILE";
}

function changeimage(){
    let image = document.getElementById("image");
    image.src="images/areeb.png";
}

function showname(){
    let name = document.getElementById("name").value;
    name = name.toUpperCase();
    let message = document.getElementById("message").innerHTML = "Hello, "+ name;
    name.reset();
} 