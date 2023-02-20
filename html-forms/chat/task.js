let chat = document
  .querySelector(".chat-widget__side-text")
chat.addEventListener('click',()=>{

    chat.closest('.chat-widget').classList.toggle("chat-widget_active")
}
)
let input = document.getElementById("chat-widget__input");
let messages = document.getElementById("chat-widget__messages");
let botMessages = ["Добрый день", "Я вас прощаю", "И вам не хворать"];
function textUserMessage(text, className) {
  let hours =
    new Date().getHours() < 9
      ? "0" + `${new Date().getHours()}`
      : new Date().getHours();
  let minutes =
    new Date().getMinutes() < 9
      ? "0" + `${new Date().getMinutes()}`
      : new Date().getMinutes();
  let nowdate = hours + ":" + minutes;
  let message = arguments.length ? text : botMessages[random()];
  messages.innerHTML += `
<div class="message ${className}">
<div class="message__time">${nowdate}</div>
<div class="message__text">${message}</div>
</div>`;
  let messageContainer = document.querySelector(
    ".chat-widget__messages-container"
  );
  messageContainer.scrollTop = messageContainer.scrollHeight;
}

function random() {
  let min = 0;
  let max = botMessages.length;
  return Math.floor(Math.random() * max);
}
document.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "enter") {
    if (input.value === "") {
      return;
    } else {
      textUserMessage(input.value, "message_client");
      input.value = "";
      setTimeout(textUserMessage, 1000);
    }
  }
});
