let link = Array.from(document.getElementsByClassName("has-tooltip"));
let timerId = null;
link.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    let isTooltip = el.nextElementSibling;
    if (isTooltip && isTooltip.classList.contains("tooltip")) {
      removeTooltip();
    } else {
      removeTooltip();
      createTooltip(e, el);
    }
  });
});

function createTooltip(e, el) {
  const div = document.createElement("div");
  div.classList.add("tooltip", "tooltip_active");
  div.setAttribute(
    "style",
    `top:${el.getBoundingClientRect().bottom + "px"} ; left:${
      el.getBoundingClientRect().left + "px"
    }`
  );
  div.innerText = e.target.title;
  el.after(div);
}
function removeTooltip() {
  tooltip = document.querySelector(".tooltip");
  if (tooltip) {
    tooltip.remove();
  }
}
document.addEventListener("scroll", () => {
  removeTooltip();
});
