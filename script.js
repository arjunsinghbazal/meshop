// myProducts.filter((item)=>item.title.includes(search.value))

// myCartProductArray = myProducts.filter((item)=> myCartIDs.includes(item.id))
//access login and signup button 
let login = document.getElementById("loginBtn");
let signup = document.getElementById("signBtn");
//signup button functionalities
signup.addEventListener("click", (e) => {
    e.preventDefault();
  window.location = "./signup/";
});
// login function functionaliteis
login.addEventListener('click',(e)=>{
    e.preventDefault();
    window.location = "./login/";
})

//check if user have already login key in local storage then redirect to shop page

// var token = localStorage.getItem("key");
// if (token) {
//   // redirect to /shop page
//   setTimeout(window.location.href = "/shop",1000);
// };
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