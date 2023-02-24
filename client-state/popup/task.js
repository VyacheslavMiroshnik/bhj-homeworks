const modal = document.getElementById("subscribe-modal");
const modalClose = modal.querySelector(".modal__close");
let isClosed = findClosedInCookie()
  ? findClosedInCookie().split("closed=")[1]
  : false;
if (!isClosed) {
  modal.classList.add("modal_active");
}
modalClose.addEventListener("click", (e) => {
  modal.classList.toggle("modal_active");
  document.cookie = "closed=" + encodeURIComponent(true);
});
function findClosedInCookie() {
  let cookieList = document.cookie.split(";");

  return cookieList.find((el) => el.includes("closed="));
}

/*function clearCookie(){
  let cookieList = document.cookie.split(';')
  cookieList.forEach(el =>{
    let indexCookie = el.indexOf('=');
    let nameCookie = (indexCookie!==-1)?el.substring(0,indexCookie + 1): el;
    document.cookie = nameCookie + "; expires=Thu, 01 Jan 1970 00:00:00 GMT;";
  })
}
clearCookie()*/
