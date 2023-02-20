const taskList = document.getElementById("tasks__list");
const addBtn = document.getElementById("tasks__add");
const input = document.getElementById("task__input");

document.addEventListener("keydown", (e) => {
  if (input.value && e.key.toLowerCase() === "enter") {
    construcTask(input.value);
    input.value = "";
  } else {
    return;
  }
});
addBtn.addEventListener("click", (e) => {
  if (input.value) {
    construcTask(input.value);
    input.value = "";
  } else {
    return;
  }
});
function construcTask(task) {
  let div = document.createElement("div");
  div.classList.add("task");
  let taskText = document.createElement("div");
  taskText.classList.add("task__title");
  taskText.textContent = task;
  div.append(taskText);
  let btnRemov = document.createElement("a");
  btnRemov.classList.add("task__remove");
  btnRemov.setAttribute("href", "#");
  btnRemov.innerHTML = "&times;";
  btnRemov.addEventListener("click", (e) => {
    e.preventDefault();
    btnRemov.closest(".task").remove();
  });
  div.append(btnRemov);
  taskList.append(div);
}
