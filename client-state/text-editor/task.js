const textArea = document.getElementById("editor");
const clearBtn = document.getElementById("clear");
textArea.value = localStorage.getItem("text") ? localStorage.text : "";

textArea.addEventListener("input", (e) => {
  localStorage.text = textArea.value;
});

clearBtn.addEventListener("click", (e) => {
  e.preventDefault();
  textArea.value = "";
  localStorage.removeItem("text");
});
