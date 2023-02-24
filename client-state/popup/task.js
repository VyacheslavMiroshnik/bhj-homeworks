const modal = document.getElementById("subscribe-modal");
const modalClose = modal.querySelector(".modal__close");
let isClosed = localStorage.getItem("closed") ? localStorage.closed : false;
if (!isClosed) {
  modal.classList.add("modal_active");
}
console.log(document.cookie);
modalClose.addEventListener("click", (e) => {
  modal.classList.toggle("modal_active");
  localStorage.closed = true;
});
