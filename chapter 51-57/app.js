function showMsg(){
    let message = document.getElementById("box");
    message.className = "showbox"
}

function changeImg(){
    let image = document.getElementById("page");
    image.className = "style";
}

function defaultImg(){
    let image = document.getElementById("page");
    image.className = "page";
}

function color(){
    let note = document.getElementById("notice");
    let para = note.getElementsByTagName("p");
    for (let i = 0; i < para.length; i++){
        para[i].style.color = "blue";
        console.log(para[i].innerHTML)
    }
    
    
    

}

function high(){
    let rules = document.getElementById("rules");
    let para = rules.getElementsByTagName("p");
    para[0].innerHTML = "Arrive on time";
    para[1].innerHTML = "Be Humble"; 
    for (let i = 0; i < para.length; i++){
        para[i].style.color="blue";

    }
}

function high1(){
    let rules = document.getElementById("course");
    let para = rules.getElementsByTagName("p");
    for (let i = 0; i < para.length; i++){
        para[i].style.color="red";

    }
}