const navs = document.querySelectorAll(".nav");
const menu = document.querySelector(".menu");
const close = document.querySelector(".close");

menu.addEventListener("click", (e) => {
  navs.forEach((nav) => {
    nav.classList.add("visiable");
  });
});

close.addEventListener("click", (e) => {
  navs.forEach((nav) => {
    nav.classList.remove("visiable");
  });
});
