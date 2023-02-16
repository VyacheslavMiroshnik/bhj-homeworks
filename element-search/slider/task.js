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

function nextImage() {
  if (activeElementIndex === listImg.length - 1) {
    listImg[activeElementIndex].classList.remove("slider__item_active");
    clearDotActive();
    activeElementIndex = 0;
    listImg[activeElementIndex].classList.add("slider__item_active");
    dotActive();
  } else {
    listImg[activeElementIndex].classList.remove("slider__item_active");
    clearDotActive();
    activeElementIndex++;
    listImg[activeElementIndex].classList.add("slider__item_active");
    dotActive();
  }
}

function prevImage() {
  if (activeElementIndex === 0) {
    listImg[activeElementIndex].classList.remove("slider__item_active");
    clearDotActive();
    activeElementIndex = listImg.length - 1;
    dotActive();
    listImg[activeElementIndex].classList.add("slider__item_active");
  } else {
    clearDotActive();
    listImg[activeElementIndex].classList.remove("slider__item_active");
    activeElementIndex--;
    dotActive();
    listImg[activeElementIndex].classList.add("slider__item_active");
  }
}

sliderBtnNext.forEach((element) => (element.onclick = nextImage));
sliderBtnPrev.forEach((element) => (element.onclick = prevImage));
/////////
let listDotsObj = Array.from(
  document.getElementsByClassName("slider__dot")
).map((element, index) => ({ element: element, id: index }));
listDotsObj[activeElementIndex].element.classList.add("slider__dot_active");
function dotActive() {
  listDotsObj[activeElementIndex].element.classList.add("slider__dot_active");
  listImg[activeElementIndex].classList.add("slider__item_active");
}
function clearDotActive() {
  listDotsObj[activeElementIndex].element.classList.remove(
    "slider__dot_active"
  );
  listImg[activeElementIndex].classList.remove("slider__item_active");
}
listDotsObj.forEach((dotObj) => {
  dotObj.element.onclick = () => {
    clearDotActive();
    activeElementIndex = dotObj.id;
    dotActive();
  };
});
