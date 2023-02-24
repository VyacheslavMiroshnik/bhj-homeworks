const xhr = new XMLHttpRequest();
const form = document.getElementById("form");
const progress = document.getElementById("progress");
form.addEventListener("submit", (e) => {
  let formData = new FormData(form);
  e.preventDefault();
  xhr.open("post", "https://students.netoservices.ru/nestjs-backend/upload");
  xhr.send(formData);
});
xhr.upload.onprogress = (e) => {
  progress.value = e.loaded / e.total;
};
