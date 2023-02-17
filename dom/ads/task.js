let adsList = Array.from(document.getElementsByClassName("rotator__case"));
let dataObj = {
  color: ["red", "green", "yellow", "blue", "gray", "red"],
  speed: ["1000", "500", "2000", "1000", "300", "2000"],
};
function setData() {
  adsList.map((element, id) => {
    element.dataset.speed = dataObj.speed[id];
    element.dataset.color = dataObj.color[id];
    element.style.color = element.getAttribute("data-color");
  });
}
setData();
let idInterval = setInterval(changeAds, 1000);
function changeAds() {
  let id = adsList.findIndex((element) =>
    element.classList.contains("rotator__case_active")
  );
  adsList[id].classList.remove("rotator__case_active");
  clearInterval(idInterval);
  if (id === adsList.length - 1) {
    adsList[0].classList.add("rotator__case_active");
    idInterval = setInterval(changeAds, adsList[0].getAttribute("data-speed"));
    return;
  }

  adsList[id + 1].classList.add("rotator__case_active");
  idInterval = setInterval(
    changeAds,
    adsList[id + 1].getAttribute("data-speed")
  );
}
