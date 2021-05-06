var slide = document.getElementById("mySidepanel");
var navRight = document.getElementById("nav-right");
var navlinks = document.getElementById("nav-links");
var closeLink = document.getElementById("close-nav");
navRight.addEventListener("click", showLinks);
closeLink.addEventListener("click", closeLinks);
function showDownSlide() {
    downContent.style.height = "100%";
}
function closeDownSlide() {
    downContent.style.height = "0";
}
function showLinks() {
    navlinks.style.width = "100%";
}
function closeLinks() {
    navlinks.style.width = "0";
}

function openNav() {
    slide.style.width = "100%";
}

function closeNav() {
    slide.style.width = "0";
}

function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("showtoggle");
    document.getElementById("rotate-image").classList.toggle("rotate-now")
}

function toggleDropdownNav() {
    document.getElementById("myIdDropdown").classList.toggle("showtoggle");
    document.getElementById("rotate-image-m").classList.toggle("rotate-now")
}