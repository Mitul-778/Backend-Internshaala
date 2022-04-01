import footer from "../scripts/footer.js";
import navbar from "../scripts/navbar.js";
import logn from "../scripts/login.js";
document.querySelector("#divi").innerHTML = logn();
document.querySelector("footer").innerHTML = footer();
document.querySelector("header").innerHTML = navbar();
document.querySelector(".logo").addEventListener("click", function () {
  window.location.href = "./../html/index.html";
});

document.getElementById("but").addEventListener("click", myFunction);
function myFunction(event) {
  event.preventDefault();
  var mail = document.getElementById("mail").value;
  var password = document.getElementById("password").value;
  var firstName = document.getElementById("first_name").value;
  var lastName = document.getElementById("last_name").value;

  var data = {
    email: mail,
    password: password,
    firstName: firstName,
    lastName: lastName,
  };

  fetch("http://localhost:5000/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  
  if (email === "" || password === "" || firstName === "" || lastName === "") {
    alert("please fill all the fields");
  } else {
    alert("Sign Up success");
    window.location.href = "./../html/personal_details.html";
  }
}

// ---------------------
document.getElementById("bu").addEventListener("click", openForm);
document.getElementById("bun").addEventListener("click", openForm); //change krna h jab navbar milega

function openForm(event) {
  event.preventDefault();
  document.getElementById("myForm").style.display = "block";
}

// ---------------------------------------------------------
document.querySelector("#btns").addEventListener("click", theFunction);

function theFunction(event) {
  event.preventDefault();
  fetch('http://localhost:5000/users',{
    method:"GET"
  })
  .then(response => response.json())
  .then(data => logIn(data));
}

function logIn(data){
  console.log('data:', data)
  let mail = document.getElementById("em").value;
  console.log('mail:', mail)
  let flag;
  for (let i = 0; i < data.length; i++) {
    if (data[i].email === mail) {
      alert("login Successfull");
      window.location.href = "./../html/card.html";
      flag = true;
      break;
    } else {
      flag = false;
    }
  }
  if (flag === false) {
    alert("wrong credentials");
  }
}

let google1 = document.getElementById("google");
google1.addEventListener("click", function () {
  loginWithGoogle();
});

function loginWithGoogle() {
  window.location.href = "http://localhost:5000/auth/google";
}
