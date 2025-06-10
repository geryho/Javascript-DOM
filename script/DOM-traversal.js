const close = document.querySelector(".close");
const card = document.querySelector(".card");

close.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.parentElement.style.display = "none";
  });
});
