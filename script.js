window.Telegram.WebApp.ready();

window.Telegram.WebApp.MainButton.setText("Відповісти");
// window.Telegram.WebApp.MainButton.onclick(() => {
//   window.Telegram.WebApp.showPopup({
//     title: "hello2",
//     message: "Правильно! +10 балів!",
//   });
// });

Telegram.WebApp.onEvent("mainButtonClicked", function () {
  window.Telegram.WebApp.sendData("some string that we need to send");
  //при клике на основную кнопку отправляем данные в строковом виде
});

window.Telegram.WebApp.showPopup({
  title: "hello1",
  message: "Правильно! +10 балів!",
});
window.Telegram.WebApp.MainButton.isVisible = true;

console.log(window.Telegram.WebApp.initData);
