const content = document.querySelectorAll(".content");
const nav = document.querySelectorAll(".container ul li");

nav.forEach((item, idx) => {
  item.addEventListener("click", () => {
    clearContent();
    clearNav();
    content[idx].classList.add("show");
    nav[idx].classList.add("active");
  });
});

function clearContent() {
  content.forEach((e) => {
    e.classList.remove("show");
  });
}

function clearNav() {
  nav.forEach((e) => {
    e.classList.remove("active");
  });
}
