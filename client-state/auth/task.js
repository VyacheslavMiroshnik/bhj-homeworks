const xhr = new XMLHttpRequest();
const form = document.getElementById("signin__form");
let userId = localStorage.getItem("userId") ? localStorage.userId : false;

if (userId) {
  showPage();
} else {
  
    form.addEventListener("submit", (e) => {
    let sendForm = new FormData(form);
    e.preventDefault();
    xhr.open("post", "https://students.netoservices.ru/nestjs-backend/auth");
    xhr.responseType = "json";
    xhr.send(sendForm);
  });
  
  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState === xhr.DONE) {
      if (xhr.response.success) {
        localStorage.userId = xhr.response.user_id;
        userId = localStorage.userId;
        showPage();
      } else {
        alert("Неправильный логин или пароль");
      }
    }
  });
}

function showPage() {
  form.closest(".signin_active").classList.toggle("signin_active");
  const spanUserId = document.getElementById("user_id");
  spanUserId.textContent = userId;
  document.getElementById("welcome").classList.toggle("welcome_active");
}
