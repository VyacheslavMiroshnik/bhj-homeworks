const xhr = new XMLHttpRequest();
xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState === xhr.DONE) {
    document.getElementById("loader").style = "display:none;";
    let arr = xhr.response.response.Valute;

    for (let key in arr) {
      constructElement(arr[key]);
    }
    console.log(typeof arr);
  }
});
xhr.open(
  "get",
  "https://students.netoservices.ru/nestjs-backend/slow-get-courses"
);
xhr.responseType = "json";
xhr.send();
function constructElement(obj) {
  const divContainer = document.getElementById("items");
  let div = document.createElement("div");
  div.classList.add("item");
  div.insertAdjacentHTML(
    "beforeend",
    `<div class="item__code">
        ${obj.CharCode}
    </div>
    <div class="item__value">
        ${obj.Value}
    </div>
    <div class="item__currency">
        руб.
    </div>`
  );
  divContainer.append(div);
}
