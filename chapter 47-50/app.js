function submitForm() {
    let userName = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let age = document.getElementById("age").value;
    age = Number(age);
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let city = document.getElementById("City").value;

    console.log("userName : " + userName);
    console.log("email : " + email);
    console.log("password : " + password);
    console.log("age : " + age);
    console.log("gender : " + gender);
    console.log("city : " + city);


}
