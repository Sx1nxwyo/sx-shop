const tg = window.Telegram.WebApp;

async function buy(itemId, price) {
    const response = await fetch(`https://YOUR_SERVER/invoice?id=${itemId}&price=${price}`);
    const data = await response.json();

    tg.openInvoice(data.url, (status) => {
        console.log("Payment:", status);

        if (status === "paid") {
            tg.showPopup({
                title: "Готово",
                message: "Оплата успішна!",
                buttons: [{ id: "ok", type: "default", text: "OK" }]
            });
        }
    });
}
