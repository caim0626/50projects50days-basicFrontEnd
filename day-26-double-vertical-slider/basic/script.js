const btnDown = document.querySelector(".btn-down");
const btnUp = document.querySelector(".btn-up");
const leftslide = document.querySelector(".left-slide");
const rightslide = document.querySelector(".right-slide");
const slideLength = document.querySelectorAll(".left-slide div").length;

let activeSlideIdx = 0;

btnDown.addEventListener("click", () => {
  changeSlide("down");
});

btnUp.addEventListener("click", () => {
  changeSlide("up");
});

function changeSlide(direction) {
  if (direction === "up") {
    activeSlideIdx++;
    if (activeSlideIdx >= slideLength) activeSlideIdx = 0;
  } else if (direction === "down") {
    activeSlideIdx--;
    if (activeSlideIdx < 0) activeSlideIdx = slideLength - 1;
  }

  rightslide.style.transform = `translateY(-${
    activeSlideIdx * document.body.clientHeight
  }px)`;
  leftslide.style.transform = `translateY(${
    activeSlideIdx * document.body.clientHeight
  }px)`;
}
