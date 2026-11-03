let students = {
    name: "areeb",
    age: 19,
    course: "Web dev",
    city: "karachi"
}

console.log(students);
console.log(students.age);
console.log(students["course"]);

students.result = "preparing";
console.log(students);
delete students.city;
console.log(students);


