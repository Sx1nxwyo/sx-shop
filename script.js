// script.js

const tg = window.Telegram?.WebApp || null;

if (tg) {
  tg.expand();
}

// вішаймо кліки на всі картки
function init() {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    const id = card.getAttribute("data-id");
    const btn = card.querySelector(".card__btn");

    btn.addEventListener("click", () => {
      if (!tg) {
        alert("Відкрий цей магазин всередині Telegram.");
        return;
      }

      // легкий хаптік
      tg.HapticFeedback?.impactOccurred("medium");

      // шлемо в бота тільки id товара
      tg.sendData(id);
    });
  });
}

document.addEventListener("DOMContentLoaded", init);
