/*const closeBtn = document.querySelectorAll(".btn-close");
const card = document.querySelector(".card");

closeBtn.forEach((closeBtn) => {
  closeBtn.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    e.preventDefault();
    e.stopPropagation();
    if (card) {
      card.remove();
    }
  });
});

const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.addEventListener("click", (e) => {
    alert("ok!");
  });
});*/

const container = document.querySelector(".container");

container.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-close")) {
    e.preventDefault();
    const card = e.target.closest(".card");
    if (card) {
      card.remove();
    }
  }
});
