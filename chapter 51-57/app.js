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
    }
    
    

}