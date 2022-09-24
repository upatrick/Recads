// const login = document.getElementById("login");
// const email = document.getElementById("email");
// const senha = document.getElementById("password");

// login.addEventListener('click', (event) => {
//   event.preventDefault();
  
//   if (email.value == "a" && senha.value == "a") {
    
//     window.location.href = "home.html"
//   } else {
//     alert("eita")
//   }
  
// })


function signup(event) {
  event.preventDefault()

  let email = document.getElementById("email").value
  let password = document.getElementById("password").value

  let username = {
    email: email,
    password: password,
  }

  let json = JSON.stringify(username)
  localStorage.setItem("dados", json)
  console.log(username)

}

function loginFunc(event) {
  event.preventDefault()

  let email = document.getElementById('email').value
  let password = document.getElementById('password').value

  let emailDb = JSON.parse(localStorage.getItem("dados")).email
  let passwordDb = JSON.parse(localStorage.getItem("dados")).password


  if (emailDb != null && passwordDb != null) {
    if (email == emailDb && password == passwordDb) {

      window.location.href = "home.html"
    } else {
      alert("Email ou senha invalidos!")
    }
      
  } else {
    console.log(emailDb, passwordDb)
  }
  
}
