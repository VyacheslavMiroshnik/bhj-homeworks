let modal = document.getElementById("modal_main");
let modalClose = Array.from(document.getElementsByClassName("modal__close"));
let modalSuccess = Array.from(document.getElementsByClassName("show-success"));
modal.classList.add("modal_active");
modalClose.forEach((element) => {
  element.onclick = () => {
    Array.from(document.getElementsByClassName("modal_active")).forEach(
      (element) => element.classList.remove("modal_active")
    );
  };
});
modalSuccess.forEach((element) => {
  element.onclick = () => {
    document.getElementById("modal_success").classList.add("modal_active");
  };
});
