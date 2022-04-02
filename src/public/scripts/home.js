const slideShow = () => {
  let img_arr = [
    'https://raw.githubusercontent.com/Mitul-778/Backend-Internshaala/main/src/public/images/int1.PNG',
    'https://raw.githubusercontent.com/Mitul-778/Backend-Internshaala/main/src/public/images/int2.PNG',
    'https://raw.githubusercontent.com/Mitul-778/Backend-Internshaala/main/src/public/images/int3.PNG',
    'https://raw.githubusercontent.com/Mitul-778/Backend-Internshaala/main/src/public/images/int4.PNG'
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

import navbar from "./navbar.js";
document.querySelector("header").innerHTML = navbar();

import footer from "./footer.js";
document.querySelector("footer").innerHTML = footer();
