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
