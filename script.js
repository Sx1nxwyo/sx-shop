const tg = window.Telegram?.WebApp;

// адаптація під тему телеги
if (tg) {
  tg.expand();
  document.body.classList.add(tg.colorScheme === "dark" ? "theme-dark" : "theme-light");
}

function init() {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    const id = card.getAttribute("data-id");
    const btn = card.querySelector(".btn");

    btn.addEventListener("click", () => {
      if (!tg) {
        alert("Open this page inside Telegram WebApp.");
        return;
      }
      tg.HapticFeedback.impactOccurred("medium");
      tg.sendData(id); // летить у message.web_app_data.data
    });
  });
}

document.addEventListener("DOMContentLoaded", init);
