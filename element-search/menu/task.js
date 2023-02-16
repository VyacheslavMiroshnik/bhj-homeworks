let menuLink = Array.from(document.getElementsByClassName("menu__link"));
menuLink.forEach((element) => {
  element.onclick = () => {
    let menuActive = Array.from(document.getElementsByClassName("menu_active"));
    if (menuActive.length) {
      menuActive.forEach((element) => element.classList.remove("menu_active"));
      return;
    }
    if (element.closest(".menu__item").querySelector(".menu_sub")) {
      element
        .closest(".menu__item")
        .getElementsByClassName("menu_sub")[0]
        .classList.add("menu_active");
      return false;
    }
  };
});
