let listImg = Array.from(document.getElementsByClassName("slider__item"));

let activeElementIndex = listImg.findIndex((element) =>
  element.className.includes("slider__item_active")
);

let sliderBtnPrev = Array.from(
  document.getElementsByClassName("slider__arrow_prev")
);

let sliderBtnNext = Array.from(
  document.getElementsByClassName("slider__arrow_next")
);

let listDotsObj = Array.from(
  document.getElementsByClassName("slider__dot")
).map((element, index) => ({ element: element, id: index }));
changeActiveImg(activeElementIndex);

function clearActive() {
  listImg[activeElementIndex].classList.remove("slider__item_active");
  listDotsObj[activeElementIndex].element.classList.remove(
    "slider__dot_active"
  );
}
function changeActiveImg(id) {
  clearActive();
  listImg[id].classList.add("slider__item_active");
  listDotsObj[id].element.classList.add("slider__dot_active");
  activeElementIndex = id;
}

sliderBtnNext.forEach(
  (element) =>
    (element.onclick = () => {
      let i = activeElementIndex + 1;
      if (i === listImg.length) {
        changeActiveImg(0);
      } else {
        changeActiveImg(i);
      }
    })
);
sliderBtnPrev.forEach(
  (element) =>
    (element.onclick = () => {
      let i = activeElementIndex - 1;
      if (i === -1) {
        changeActiveImg(listImg.length - 1);
      } else {
        changeActiveImg(i);
      }
    })
);
listDotsObj.forEach((dotObj) => {
  dotObj.element.onclick = () => {
    changeActiveImg(dotObj.id);
  };
});
