const closeBtn = document.querySelectorAll(".btn-close");
const card = document.querySelector(".card");

closeBtn.forEach((closeBtn) => {
  closeBtn.addEventListener("click", (e) => {
    const cards = e.target.closest(".card");
    e.preventDefault();
    if (cards) {
      cards.remove();
    }
  });
});
