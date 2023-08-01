const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;
let int = setInterval(autoPlus, 30);

function autoPlus() {
  load++;
  if (load > 99) {
    clearInterval(int);
  }
  loadText.textContent = `${load}%`;
  loadText.style.opacity = (100 - load) / 100;
  bg.style.filter = `blur(${100 - load}px)`;
}
