let username=document.querySelector(".username");
let email=document.querySelector(".useremail");

let user=JSON.parse(localStorage.getItem("user"));

username.innerText=`Name :  ${user.firstname+' '+user.lastname}`;
email.innerText=`Email : ${user.email}`;

var logout=document.querySelector('#logout');

//click on logout button key will remove and go to home page

var token = localStorage.getItem("key");

logout.addEventListener("click",()=>{
    localStorage.removeItem('key');
    alert("You are logging out!...see u soon!!!")
    window.location.href="/";
})