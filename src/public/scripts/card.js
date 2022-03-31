import { sidebar } from "../scripts/sidebar.js";
document.getElementById("sidebar").innerHTML = sidebar();

let parent = document.getElementById("main");


// localStorage.setItem("data", JSON.stringify(data));

const cardData = async()=>{
  try {
    let res = await fetch("http://localhost:5000/card")

    let data = await res.json()
    // console.log(data);
    internshipData(data);
  } catch (error) {
    console.log(error);

  }
}
cardData()

let internshipData = (data) =>
  // function internshipData()
  {
    parent.innerHTML = "";
    data.map((el) => {
      // console.log("object");
      let carddiv = document.createElement("div");

      let title = document.createElement("h4");
      title.textContent = el.title;

      let des = document.createElement("p");
      des.textContent = el.description;

      let location = document.createElement("p");
      location.textContent = el.location;

      let starting = document.createElement("p");
      starting.textContent = el.starting;

      let duration = document.createElement("p");
      duration.textContent = el.duration;

      let stipend = document.createElement("p");
      stipend.textContent = el.stipend;

      let joining = document.createElement("p");
      joining.textContent = el.joining;

      let working_hours = document.createElement("p");
      working_hours.textContent = el.working_hours;

      let internship = document.createElement("p");
      internship.textContent = el.internship;

      let newdiv = document.createElement("div");
      newdiv.setAttribute("id", "newdiv");

      let para1 = document.createElement("p");
      para1.innerText = "♽START";

      let para2 = document.createElement("p");
      para2.innerText = "🗓DURATION";

      let para3 = document.createElement("p");
      para3.innerText = "💵STIPEND";

      let para4 = document.createElement("p");
      para4.innerText = "⧖ Apply By";

      let interndiv = document.createElement("div");
      interndiv.setAttribute("id", "interndiv");
      interndiv.append(internship);

      let whdiv = document.createElement("div");
      whdiv.setAttribute("id", "whdiv");
      whdiv.append(working_hours);

      let detaildiv = document.createElement("div");
      detaildiv.textContent = "Views details > ";
      detaildiv.setAttribute("id", "detaildiv");

      detaildiv.onclick = () => {
        // console.log("object");
        window.location.href = "./../html/traning.html";
      };

      let bottomdiv = document.createElement("div");
      bottomdiv.setAttribute("id", "bottomdiv");

      let startdiv = document.createElement("div");

      let durdiv = document.createElement("div");

      let stipdiv = document.createElement("div");

      let joindiv = document.createElement("div");

      startdiv.append(para1, starting);
      durdiv.append(para2, duration);
      stipdiv.append(para3, stipend);
      joindiv.append(para4, joining);

      newdiv.append(startdiv, durdiv, stipdiv, joindiv);
      bottomdiv.append(interndiv, whdiv, detaildiv);
      carddiv.append(title, des, location, newdiv, bottomdiv);

      parent.append(carddiv);
    });
  };
// let parent = document.getElementById("main");
// internshipData(data);

let wfh_checkbox = document.getElementById("wfh");

let ptm_checkbox = document.getElementById("ptm");

wfh_checkbox.oninput = function checkboxfilter(parent) {
  let filteredData = [];
  if (wfh_checkbox.checked) {
    data.map(function (item) {
      if (item.location == "⌂ Work From Home") {
        filteredData.push(item);
      }
    });
    console.log(filteredData);
    internshipData(filteredData);
  } else {
    internshipData(data);
  }
};

ptm_checkbox.oninput = function checkboxfilterptm(parent) {
  let filteredDataptm = [];
  if (ptm_checkbox.checked) {
    data.map(function (item) {
      if (item.working_hours == "Part time allowed") {
        filteredDataptm.push(item);
      }
    });
    console.log(filteredDataptm);
    internshipData(filteredDataptm);
  } else {
    internshipData(data);
  }
};

// export { internshipData };

import footer from "../scripts/footer.js";
import navbar from "../scripts/navbar.js";

document.querySelector("footer").innerHTML = footer();
document.querySelector("nav").innerHTML = navbar();
