const body = document.querySelector("body");
const mainSection = document.querySelector(".main-section");
const button = document.querySelector("button");
const changeColor = document.querySelector("#changeColor");
let heading = document.querySelector("#heading");

let colorArr = [
  "#FF0000",
  "#00FFFF",
  "#0000FF",
  "#00008B",
  "#ADD8E6",
  "#800080",
  "#FFFF00",
  "#00FF00",
  "#FF00FF",
  "#FFC0CB",
  "#FFFFFF",
  "#C0C0C0",
  "#808080",
  "#000000",
  "#FFA500",
  "#A52A2A",
  "#800000",
  "#008000",
  "#808000",
  "#7FFFD4",
];
let colorArrLen = colorArr.length;
function randomColor(colorArrLen) {
  let randomColorGenerator = Math.floor(Math.random() * colorArrLen);
  return colorArr[randomColorGenerator];
}

window.onload = function () {
  body.style.backgroundColor = "white";
};
button.addEventListener("click", function () {
  let color = randomColor(colorArrLen);
  if (color == "#000000" || color == "#0000FF" || color == "#00008B") {
    body.style.backgroundColor = color;
    changeColor.innerText = color;
    heading.style.color = "white";
  } else {
    body.style.backgroundColor = color;
    changeColor.innerText = color;
    heading.style.color = "black";
  }
});
