const tg = window.Telegram.WebApp;
tg.expand();

const u = tg.initDataUnsafe?.user;
if (u) {
  document.getElementById('user').innerText =
    `Привіт, ${u.first_name}${u.last_name ? ' ' + u.last_name : ''} (@${u.username||'anon'})`;
}

function buy(product_id) {
  const payload = { action: "buy", product_id };
  tg.sendData(JSON.stringify(payload)); // прилетить у бота як web_app_data
  tg.close(); // закриваємо апку — бот надішле інвойс у чат
}
