let tabList = Array.from(document.getElementsByClassName("tab"));
let tabContentList = Array.from(
  document.getElementsByClassName("tab__content")
);
tabList.forEach((tab) =>
  tab.addEventListener("click", () => {
    let prevId = tabList.findIndex((element) =>
      element.className.includes("tab_active")
    );
    let newId = tabList.findIndex((element) => element === tab);
    tabList[prevId].classList.remove("tab_active");
    tabContentList[prevId].classList.remove("tab__content_active");
    tabList[newId].classList.add("tab_active");
    tabContentList[newId].classList.add("tab__content_active");
  })
);
