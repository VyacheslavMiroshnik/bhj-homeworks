let menuLink = Array.from(document.getElementsByClassName("menu__link"));
menuLink.forEach((element) => {
  element.onclick = () => {
    let menuActive = Array.from(document.getElementsByClassName("menu_active"));
    let isActive = element
      .closest(".menu__item")
      .querySelector(".menu_sub")
      .className.includes("menu_active");
    if (menuActive.length && isActive) {
      menuActive.forEach((element) => {
        element.classList.remove("menu_active");
      });
      return false;
    }
    if (element.closest(".menu__item").querySelector(".menu_sub")) {
      menuActive.forEach((element) => {
        element.classList.remove("menu_active");
      });
      element
        .closest(".menu__item")
        .querySelector(".menu_sub")
        .classList.add("menu_active");
      return false;
    }
  };
});
