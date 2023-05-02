var loginDisplay=document.getElementById('login');
var login = document.getElementById("loginBtn");

//login page if user have already account and if user directly go to login page//
let loginEmail=document.getElementById("loginEmail");
let loginPassword=document.getElementById("loginPassword");
login.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("login clicked")
    var Email = loginEmail.value;
    var Pass = loginPassword.value;
    var User = JSON.parse(localStorage.getItem("user"));
    // console.log("email",Email,User.email);
    if(Pass==""||Email==""){
        alert("Enter Valid Password and email");
        window.location.href="/login"
        return
    }
   else if (User.email!=Email) {
        alert("User does not exist. Please sign up!");
        window.location.href="/"
        return;
      }
   else if (Pass!==User.password) {
      alert("Incorrect password!");
      console.log(Pass);
      console.log(ecistingpassword);
      return;
    }
  
    // Navigate to another page
    else if(User.password == Pass){
        window.location.href = "/shop";
        var token=generatekey(16);
        localStorage.setItem("key",token);
    }
 else{
    alert("Please Check Your Internet connection");
 }
});
///generate random key for user login 
function generatekey(n){
var char = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
var key="";
for(let i=0;i<n;i++){
    key+=char.charAt(Math.floor(Math.random()*char.length));
}
return key;
}

//check if user have already login key in local storage then redirect to shop page

var token = localStorage.getItem("key");
if (token) {
  // redirect to /shop page
  window.location.href = "/shop";
}

let cart=document.getElementById("mycart");

cart.addEventListener("click",()=>{
var token = localStorage.getItem("key");
if (token) {
  // redirect to /shop page
  window.location.href = "/cart";
}
else{
  alert("Login or Signup first!!")
}
})



//check if user have already login key in local storage then redirect t0 shop page
var userData = JSON.parse(localStorage.getItem("user"));

// Parse the user data to a JavaScript object

// Access the current user's first and last name
var firstName = userData.firstname;
var lastName = userData.lastname;
console.log(firstName);