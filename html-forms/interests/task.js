const mainCheck = [];
let parent = document.querySelector("input");
mainCheck.push(parent);
parent = parent.closest("li").nextElementSibling;
mainCheck.push(parent.querySelector("input"));

let childCheck = [];
mainCheck.forEach((el) => {
  let child = el.closest("label").nextElementSibling;
  childCheck.push(Array.from(child.querySelectorAll("input")));
});

childCheck.forEach((inputChild, index) => {
  inputChild.forEach((input) => {
    input.addEventListener("change", () => {
      if (input.checked) {
        mainCheck[index].checked = true;
      } else {
        if (inputChild.filter((element) => element.checked).length === 0) {
          mainCheck[index].checked = false;
        }
      }
    });
  });
});
mainCheck.forEach((parentInputs, id) => {
  parentInputs.addEventListener("change", () => {
    if (parentInputs.checked) {
      childCheck[id].forEach((el) => (el.checked = true));
    } else {
      childCheck[id].forEach((el) => (el.checked = false));
    }
  });
});
