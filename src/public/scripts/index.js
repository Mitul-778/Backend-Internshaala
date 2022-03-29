const slideShow = () => {
  let img_arr = [
    "./images/int1.PNG",
    "./images/int2.PNG",
    "./images/int3.PNG",
    "./images/int4.PNG",
  ];
  let slide_img = document.getElementById("slideshow_img");
  let i = 0;
  var x = setInterval(function () {
    if (i == img_arr.length) {
      i = 0;
    }
    slide_img.src = img_arr[i];
    i++;
  }, 4000);
};
slideShow();

import navbar from "../scripts/navbar.js";
document.querySelector("header").innerHTML = navbar();

import footer from "../scripts/footer.js";
document.querySelector("footer").innerHTML = footer();
