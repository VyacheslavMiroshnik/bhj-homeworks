let modal = document.getElementById("modal_main");
let modalClose = Array.from(document.getElementsByClassName("modal__close"));
let modalSuccess = Array.from(document.getElementsByClassName("show-success"));
modal.classList.add("modal_active");
function removeActive(){
  Array.from(document.getElementsByClassName("modal_active")).forEach(
    (element) => element.classList.remove("modal_active")
  );
}
modalClose.forEach((element) => {
  element.onclick = () => {
   removeActive();
  };
});
modalSuccess.forEach((element) => {
  element.onclick = () => {
    removeActive();
    document.getElementById("modal_success").classList.add("modal_active");
  };
});
