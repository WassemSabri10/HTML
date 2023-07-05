//Write my JAVASCRIPT here

var pics = [
  "images/IMG_2548.JPG",
  "images/IMG_2380.JPG",
  "images/IMG_2385.JPG",
  "images/IMG_2393.JPG",
  "images/IMG_2401.JPG",
  "images/IMG_2405.JPG",
];

var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;

btn.addEventListener("click", function () {
  if (counter === 6) {
    counter = 0;
  }

  img.src = pics[counter];
  counter = counter + 1;
});
