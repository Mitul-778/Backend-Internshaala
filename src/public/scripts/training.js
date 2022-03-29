const selected = document.querySelector(".selected")
const optionsContainer = document.querySelector(".options_container")

const optionList = document.querySelectorAll(".option")

selected.addEventListener("click",() =>{
    optionsContainer.classList.toggle("active")
})

optionList.forEach(ele =>{
    ele.addEventListener("click", () =>{
        selected.innerHTML = ele.querySelector("label").innerHTML
        optionsContainer.classList.remove("active")
    })
})


import footer from "../scripts/footer.js"

document.querySelector("footer").innerHTML=footer()