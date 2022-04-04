const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options_container");

const optionList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionList.forEach((ele) => {
  ele.addEventListener("click", () => {
    selected.innerHTML = ele.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});

const trainingData = async () => {
  let res = await fetch("/training");
  let data = await res.json();
  appendData(data);
};
trainingData();

const appendData = (data) => {
  data.map((el) => {
    let div1 = document.createElement("div");
    div1.setAttribute("class", "horizontal-items");
    let div2 = document.createElement("div");
    div2.setAttribute("class", "cource-title");
    let div3 = document.createElement("div");
    div3.setAttribute("class", "cource-desc");
    let div4 = document.createElement("div");
    div4.setAttribute("class", "cource-duration");

    let img = document.createElement("img");
    img.src = el.image;
    img.setAttribute("class", "cource-image");

    let title = document.createElement("p");
    title.textContent = el.title;

    let description = document.createElement("p");
    description.textContent = el.description;

    let p1 = document.createElement("p");
    p1.setAttribute("class", "cource-time");
    p1.textContent = "Duration: 6 weeks";

    let p2 = document.createElement("p");
    p2.setAttribute("class", "know-more");
    p2.textContent = "Know More";
    p2.addEventListener("click", function () {
      document.location.href = "../web_development.html";
    });

    div2.append(title);
    div3.append(description);
    div4.append(p1, p2);
    div1.append(img, div2, div3, div4);
    document.querySelector(".horizontal-container").append(div1);
  });
};

import footer from "./footer.js";

document.querySelector("footer").innerHTML = footer();
