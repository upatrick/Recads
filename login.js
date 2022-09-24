const login = document.getElementById("login");
const email = document.getElementById("email");
const senha = document.getElementById("password");

login.addEventListener('click', (event) => {
  event.preventDefault();
  
  if (email.value == "a" && senha.value == "a") {
    
    window.location.href = "home.html"
  } else {
    alert("eita")
  }
  
})




