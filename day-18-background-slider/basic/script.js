const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");
const slides = document.querySelectorAll(".slide");
const bodyEl = document.querySelector("body");

leftBtn.addEventListener("click", () => {
  rerenderImg("left");
});

rightBtn.addEventListener("click", () => {
  rerenderImg("right");
});

const rerenderImg = (drection) => {
  let curSlide,
    curIdx = -1;
  slides.forEach((slide, idx) => {
    if (slide.classList.contains("active")) {
      curSlide = slide;
      curIdx = idx;
    }
  });
  let actSlide;
  if (drection === "left") {
    actSlide = slides[curIdx === 0 ? slides.length - 1 : curIdx - 1];
  } else if (drection === "right") {
    actSlide = slides[curIdx === slides.length - 1 ? 0 : curIdx + 1];
  }
  curSlide.classList.remove("active");
  actSlide.classList.add("active");
  bodyEl.style.backgroundImage = actSlide.style.backgroundImage;
};
