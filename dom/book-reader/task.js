let fontSizeLink = Array.from(document.getElementsByClassName("font-size"));
let book = document.querySelector(".book");

function changeFontSize(link) {
  let idActive = fontSizeLink.findIndex((element) =>
    element.classList.contains("font-size_active")
  );

  let attrValue = link.getAttribute("data-size");
  fontSizeLink[idActive].classList.remove("font-size_active");
  link.classList.add("font-size_active");

  if (attrValue === "big" || attrValue === "small") {
    book.classList.remove("book_fs-small", "book_fs-big");

    if (attrValue === "small") {
      book.classList.contains("book_fs-big")
        ? book.classList.remove("book_fs-big").add("book_fs-small")
        : book.classList.add("book_fs-small");
    } else {
      book.classList.contains("book_fs-small")
        ? book.classList.remove("book_fs-small").add("book_fs-big")
        : book.classList.add("book_fs-big");
    }
  } else {
    book.classList.remove("book_fs-small", "book_fs-big");
  }
}

fontSizeLink.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    if (link.classList.contains("font-size_active")) {
      return;
    }
    changeFontSize(link);
  });
});
