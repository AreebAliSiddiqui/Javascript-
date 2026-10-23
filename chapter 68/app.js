let course = document.getElementById("course");
let btn = document.getElementById("btn");
btn.addEventListener("click",function(){
    let newCourse = document.createElement("li")
    newCourse.textContent = "CSS";
    course.insertBefore(newCourse,course.children[1]);
})
 
let btn1 = document.getElementById("btn1");
btn1.addEventListener("click",function(){
    course.removeChild(course.lastElementChild);
})