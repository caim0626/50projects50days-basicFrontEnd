const btnDown = document.querySelector(".btn-down");
const btnUp = document.querySelector(".btn-up");
const leftslide = document.querySelector(".left-slide");
const rightslide = document.querySelector(".right-slide");
const slideLength = document.querySelectorAll(".left-slide div").length;

let activeSlide = 0;

btnDown.addEventListener("click", () => {
  changeSlide("down");
});

btnUp.addEventListener("click", () => {
  changeSlide("up");
});

function changeSlide(direction) {
  if (direction === "up") {
    activeSlide++;
    if (activeSlide >= slideLength) activeSlide = 0;
  } else if (direction === "down") {
    activeSlide--;
    if (activeSlide < 0) activeSlide = slideLength - 1;
  }

  rightslide.style.transform = `translateY(-${
    activeSlide * document.body.clientHeight
  }px)`;
  leftslide.style.transform = `translateY(${
    activeSlide * document.body.clientHeight
  }px)`;
}
