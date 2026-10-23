let course = document.getElementById("course");
let btn = document.getElementById("btn");
btn.addEventListener("click",function(){
    let newCourse = document.createElement("li")
    newCourse.textContent = "CSS";
    course.insertBefore(newCourse,course.children[1]);
})