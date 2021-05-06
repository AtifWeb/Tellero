let LeftArrowMbl = document.querySelector(".left-arrow-icon-mbl");
let RightArrowMbl = document.querySelector(".right-arrow-icon-mbl");
let LeftArrowMblshoutcut = document.querySelector(
  ".left-arrow-icon-mbl-shoutcut"
);
let rightArrowMblshoutcut = document.querySelector(
  ".right-arrow-icon-mbl-shoutcut"
);
let TopRightSide = document.querySelector(".right-top");
let ReportShortcutNav = document.querySelector(".report-shortcut nav");

LeftArrowMbl.addEventListener("click", () => {
  TopRightSide.style.left = 0;
});
RightArrowMbl.addEventListener("click", () => {
  TopRightSide.style.left = "100%";
});
LeftArrowMblshoutcut.addEventListener("click", () => {
  ReportShortcutNav.style.left = 0;
});
rightArrowMblshoutcut.addEventListener("click", () => {
  ReportShortcutNav.style.left = "100%";
});
