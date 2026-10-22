let form = document.getElementById("form");
form.addEventListener('submit',function(event){
    event.preventDefault();
    let msg = document.getElementById("input").value;
    let parent = document.getElementById("ul");
    let list = document.createElement("li");
    list.textContent = msg;
    parent.appendChild(list);
    form.reset();
}) 