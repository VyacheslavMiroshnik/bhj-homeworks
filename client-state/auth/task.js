const xhr = new XMLHttpRequest();
const form = document.getElementById("signin__form");
let userId = localStorage.getItem("userId");
showPage();

form.addEventListener("submit", (e) => {
  let sendForm = new FormData(form);
  e.preventDefault();
  xhr.open("post", "https://students.netoservices.ru/nestjs-backend/auth");
  xhr.responseType = "json";
  xhr.send(sendForm);
});

xhr.addEventListener("load", (e) => {
  if (xhr.response.success) {
    localStorage.userId = xhr.response.user_id;
    userId = localStorage.userId;
    form.reset();
    showPage();
  } else {
    form.reset();

    alert("Неправильный логин или пароль");
  }
});

function showPage() {
  if (userId) {
    form.closest(".signin_active").classList.toggle("signin_active");
    const spanUserId = document.getElementById("user_id");
    spanUserId.textContent = userId;
    document.getElementById("welcome").classList.toggle("welcome_active");
  }
}
