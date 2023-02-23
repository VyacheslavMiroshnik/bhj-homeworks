const taskList = document.getElementById("tasks__list");
const addBtn = document.getElementById("tasks__add");
const input = document.getElementById("task__input");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.value.trim()) {
    construcTask(input.value);
    input.value = "";
  }
});
function construcTask(task) {
  let div = document.createElement("div");
  div.classList.add("task");
  div.innerHTML = ` <div class="task__title">${task}</div>
  <a class="task__remove" href="#">
  &times;
  </a>`;
  let btnRemov = div.querySelector(".task__remove");
  btnRemov.addEventListener("click", (e) => {
    e.preventDefault();
    btnRemov.closest(".task").remove();
  });
  taskList.append(div);
}
