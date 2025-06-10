const rgbDisplay = document.createElement("div");
const Display = document.body.appendChild(rgbDisplay);
Display.style.fontWeight = "bold";

const bColor = document.getElementById("button-color");
bColor.addEventListener("click", function () {
  // document.body.style.backgroundColor = "aqua";
  document.body.classList.toggle("lightblue");
});
const rColorButton = document.createElement("button");
const textRColorButton = document.createTextNode("Random Color");
rColorButton.appendChild(textRColorButton);
rColorButton.setAttribute("type", "button");
bColor.after(rColorButton);

rColorButton.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
  rgbDisplay.textContent = `RGB: ${r}, ${g}, ${b}`;
});

const rSlider = document.querySelector("input[name=rSlider]");
const gSlider = document.querySelector("input[name=gSlider]");
const bSlider = document.querySelector("input[name=bSlider]");

function getBgValue() {
  const r = rSlider.value;
  const g = gSlider.value;
  const b = bSlider.value;
  document.body.style.backgroundColor = `RGB(${r},${g},${b})`;
  rgbDisplay.textContent = `RGB: ${r}, ${g}, ${b}`;
}

[rSlider, gSlider, bSlider].forEach((slider) => {
  slider.addEventListener("input", getBgValue);
});
