let countElement = document.getElementById("clicker__counter");
let image = document.getElementById("cookie");
let count = 0;
let previousClick;
image.onclick = function () {
  count++;
  let lastClick = new Date();
  let diffTimeClick = "";
  previousClick = count === 1 ? lastClick : previousClick;
  if (count >= 2) {
    diffTimeClick = `Cкорость клика : ${(
      1000 /
      (lastClick - previousClick)
    ).toFixed(2)}`;
    previousClick = lastClick;
  }
  image.width = image.width > 200 ? 150 : 300;
  countElement.innerHTML = `${count} ` + "<br>" + diffTimeClick;
};
