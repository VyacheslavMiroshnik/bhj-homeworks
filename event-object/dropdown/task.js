let dropValue = document.querySelector(".dropdown__value");
let dropItems = Array.from(document.getElementsByClassName("dropdown__item"));
let dropList = document.querySelector("ul.dropdown__list");

dropValue.onclick = () => {
  dropList.classList.add("dropdown__list_active");
  dropItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      dropValue.textContent = item.textContent;
      dropList.classList.remove("dropdown__list_active");
      return;
    });
  });
};
