const textArea = document.getElementById("editor");
textArea.value = localStorage.getItem("text") ? localStorage.text : "";
textArea.addEventListener("input", (e) => {
  localStorage.text = textArea.value;
});
