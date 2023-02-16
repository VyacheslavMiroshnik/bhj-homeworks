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
    activeElementIndex = 0;
    listImg[activeElementIndex].classList.add("slider__item_active");
  } else {
    listImg[activeElementIndex].classList.remove("slider__item_active");
    activeElementIndex++;
    listImg[activeElementIndex].classList.add("slider__item_active");
  }
}

function prevImage() {
  if (activeElementIndex === 0) {
    listImg[activeElementIndex].classList.remove("slider__item_active");
    activeElementIndex = listImg.length - 1;
    listImg[activeElementIndex].classList.add("slider__item_active");
  } else {
    listImg[activeElementIndex].classList.remove("slider__item_active");
    activeElementIndex--;
    listImg[activeElementIndex].classList.add("slider__item_active");
  }
}

sliderBtnNext.forEach((element) => (element.onclick = nextImage));
sliderBtnPrev.forEach((element) => (element.onclick = prevImage));
