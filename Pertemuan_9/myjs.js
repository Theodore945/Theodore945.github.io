const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");
menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});
var pageScrolls = document.querySelectorAll(".page-scroll");
pageScrolls.forEach(function (selectPageScroll) {
  selectPageScroll.addEventListener("click", function (e) {
    pageScrolls.forEach(function (pageScroll) {
      pageScroll.classList.remove("active");
    });
    selectPageScroll.classList.add("active");
    var href = selectPageScroll.getAttribute("href");
    var elmentHref = document.querySelector(href);
    var bodyelem = document.querySelector("html,body");
    var pos = elmentHref.offsetTop - 49;
    bodyelem.scrollTop = pos;
    e.preventDefault();
  });
});
