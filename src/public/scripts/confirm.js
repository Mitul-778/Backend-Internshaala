const selected = document.querySelector(".selected")
const optionsContainer = document.querySelector(".options_container")

const optionList = document.querySelectorAll(".option")

selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active")
})

optionList.forEach(ele => {
    ele.addEventListener("click", () => {
        selected.innerHTML = ele.querySelector("label").innerHTML
        optionsContainer.classList.remove("active")
    })
})




let userData = JSON.parse(localStorage.getItem("userdata"))

document.getElementById("filled-mail").value = userData[userData.length-1].email

console.log(userData[userData.length-1].email)


import footer from "./footer.js";
import navbar from "./navbar.js"

document.querySelector("footer").innerHTML = footer()
document.querySelector("nav").innerHTML = navbar()