divReveal = Array.from(document.getElementsByClassName("reveal"));
function isVisible(el) {
  let { top, bottom } = el.getBoundingClientRect();
  if (bottom < 0) {
    return false;
  }
  if (top > window.innerHeight) {
    return false;
  }
  return true;
}
document.addEventListener("scroll", () => {
  divReveal.forEach((revealItem) => {
    if (
      revealItem.classList.contains("reveal_active") &&
      !isVisible(revealItem)
    ) {
      revealItem.classList.remove("reveal_active");
    } else {
      if (
        isVisible(revealItem) &&
        !revealItem.classList.contains("reveal_active")
      ) {
        revealItem.classList.add("reveal_active");
      }
    }
  });
});
