let elementDead = document.getElementById("dead");
let elementLost = document.getElementById("lost");
let countWin = 0;
let countLost = 0;
let listHoleElements = document.getElementsByClassName("hole");
for (let i = 0; i < listHoleElements.length; i++) {
  listHoleElements[i].onclick = function () {
    if (listHoleElements[i].className.includes("hole_has-mole")) {
      countWin++;
    } else {
      countLost++;
    }
    if (countWin === 10) {
      playing = false;
      window.alert("Вы победили");
      countWin = 0;
      countLost = 0;
    }
    if (countLoose === 5) {
      playing = false;
      countLost = 0;
      countWin = 0;
      window.alert("Вы проиграли");
    }
    elementDead.textContent = countWin;
    elementLost.textContent = countLost;
  };
}
