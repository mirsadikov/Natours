const allLinks = document.querySelectorAll("a:link");
const naviToggle = document.getElementById("navi-toggle");
const htmlEl = document.documentElement;

///////////////////////////////////////////////////////////
// Enable transition after page load
window.addEventListener("DOMContentLoaded", function () {
  document.body.classList.remove("preload");
});

///////////////////////////////////////////////////////////
// Navigation
naviToggle.addEventListener("change", function () {
  htmlEl.classList.toggle("no-scroll");
});

allLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    if (link.classList.contains("navigation__link")) {
      naviToggle.checked = false;
      htmlEl.classList.toggle("no-scroll");
    }
  });
});
