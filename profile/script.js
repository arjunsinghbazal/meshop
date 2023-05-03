let fname=document.getElementById("fName");
let lname=document.getElementById("lName");
let oldPassword=document.getElementById("pw1");
let newPassword=document.getElementById("pw2");
let confirmPassword=document.getElementById("pw3");

//get buttons access

var changeInfo=document.getElementById("changeInfo");
var changePassword=document.getElementById("changePassword");
var logout=document.querySelector('.logout');

//click on logout button key will remove and go to home page

var token = localStorage.getItem("key");

logout.addEventListener("click",()=>{
    localStorage.removeItem('key');
    alert("You are logging out!...see u soon!!!")
    window.location.href="./";
})

//how to check the current usser info and change user info
var user = JSON.parse(localStorage.getItem("user"));
changeInfo.addEventListener("click",(e)=>{
  e.preventDefault();
  if(fname.value==""||lname.value==""){
    alert("Required Fields!!!")
  }
  else if(fname.value==user.firstname&&lname.value==user.lastname){
    alert("Name match to olda name please update new name");
  }
  else {
    user.firstname=fname.value;
    user.lastname=lname.value;
    localStorage.setItem("user", JSON.stringify(user));
    window.location.href="../showprofile";
  }
})


//change the password on clicking

changePassword.addEventListener("click",(e)=>{
e.preventDefault();
if(oldPassword.value!==user.password){
  alert("Password does't match with old password");
  console.log("enter value",oldPassword.value);
  console.log("local",user.password);
  return;
}
else if(oldPassword.value==""||newPassword.value==""||confirmPassword.value==""){
  alert("All fields are mandatory!!");
  return;
}
else if(newPassword.value!==confirmPassword.value){
  alert("New and Confirm Password are missmatch");
  return;
}
else{
  user.password=newPassword.value;
  console.log("local update",user.password);
  localStorage.setItem("user", JSON.stringify(user));
  window.location.href="../showprofile";
  return;
}
})