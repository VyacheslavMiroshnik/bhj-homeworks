let mainCheck = Array.from(
  document.querySelectorAll(".interests_main>ul>.interest>label>input")
);
let childCheck = [];
mainCheck.forEach((el) => {
  childCheck.push(
    Array.from(
      el.closest("li").querySelector("ul").querySelectorAll(".input")
    )
  );
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
