const xhr = new XMLHttpRequest();
const resultXhr = new XMLHttpRequest();
const answersBlock = document.getElementById("poll__answers");
const title = document.getElementById("poll__title");

xhr.addEventListener("readystatechange", (e) => {
  if (xhr.readyState === xhr.DONE) {
    constructPoll(xhr.response);
  }
});
xhr.open("get", "https://students.netoservices.ru/nestjs-backend/poll");
xhr.responseType = "json";
xhr.send();
function constructPoll(object) {
  let pollId = object.id;
  let pollTitle = object.data.title;
  let pollAnswer = object.data.answers;

  document.getElementById("poll__title").innerHTML = pollTitle;
  pollAnswer.forEach((element, index) => {
    let btn = document.createElement("button");
    btn.innerHTML = element;
    btn.classList.add("poll__answer");
    document.getElementById("poll__answers").append(btn);
    btn.addEventListener("click", (e) => {
      resultXhr.open(
        "POST",
        "https://students.netoservices.ru/nestjs-backend/poll"
      );
      resultXhr.setRequestHeader(
        "Content-type",
        "application/x-www-form-urlencoded"
      );
      resultXhr.send(`vote=${pollId}&answer=${index}`);
      answersBlock.style = "display:none;";
      alert("Спасибо ваш голос засчитан");
    });
  });
}
resultXhr.addEventListener("readystatechange", (e) => {
  if (resultXhr.readyState === resultXhr.DONE) {
    constructStat(JSON.parse(resultXhr.responseText).stat);
  }
});
function constructStat(object) {
  let div = document.createElement("div");
  let totatlVotes = object.reduce((acc, element) => (acc += element.votes), 0);
  console.log(totatlVotes);
  title.after(div);
  object.forEach((element) => {
    statString = `<div>${element.answer}: <b> ${(
      (element.votes / totatlVotes) *
      100
    ).toFixed(2)} % </b>   </div>`;
    div.insertAdjacentHTML("beforeend", statString);
  });
}
