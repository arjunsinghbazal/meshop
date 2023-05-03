// Write your script her

var firstname = document.getElementById("firstName");
var lastname = document.getElementById("lastName");
var email = document.getElementById("email");
var pass = document.getElementById("pwd1");
var confirmpass = document.getElementById("pwd2");
var red = document.getElementById("red");
var signup = document.getElementById("sign");

//login and signup

var signupDisplay=document.getElementById('signup');

var token = localStorage.getItem("key");
if (token) {
  // redirect to /shop page
  window.location.href = "./shop/";
}

var users=[];
//click the signup button add eventlistener and show the login pagee
signup.addEventListener("click", (e) => {
var existingUser = users.find((user) => user.email === email.value);
var existingLocalStorageUser = JSON.parse(localStorage.getItem(email.value));
  if (existingUser || existingLocalStorageUser) {
    e.preventDefault();
  alert("You already have an account. Please log in instead.");
  window.location.href="./login/"
    return;
}
  if (!firstname.value || !lastname.value || !pass.value || !email.value || !confirmpass.value) {
    e.preventDefault()
    alert("All fields are required!");
  } 
  else if (!email.value.match(/\S+@\S+\.\S+/)) {
    e.preventDefault()
    red.innerText = "Please enter a valid email address!";
    red.style.color = "red";
    setTimeout(() => {
        red.innerText = "";
        red.style.color = "";
      }, 1000);
  } 
  else if (pass.value !== confirmpass.value) {
    e.preventDefault()
    red.innerText = "Passwords do not match!";
    red.style.color = "red";
    pass.value.type="text";
    confirmpass.value="text";
    setTimeout(() => {
        red.innerText = "";
        red.style.color = "";
      }, 1000);
  } 
  else {
    e.preventDefault()
    red.innerText = "Successfully signed up!";
    red.style.color = "green";
    setTimeout(() => {
        var user = {
            firstname: firstname.value,
            lastname: lastname.value,
            email: email.value,
            password: pass.value
          };
          ////update data in array 
        users.push(user);
        localStorage.setItem("user", JSON.stringify(user));
        // localStorage.setItem(pass.value,JSON.stringify(user));
        window.location.href="./login/";
      }, 500);
      
  }
});

let cart=document.getElementById("mycart");
cart.addEventListener("click",()=>{
var token = localStorage.getItem("key");
if (token) {
  // redirect to /shop page
  window.location.href = "./cart/";
}
else{
  alert("Login or Signup first!!")
}
})
