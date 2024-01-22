const imageContainer = document.querySelector(".image-container");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let translateXvalue = 0;
let customInterval = setInterval(() => {
  loop();
}, 1000);

function loop(decreate = true) {
  if (decreate) {
    translateXvalue = translateXvalue <= -900 ? 0 : translateXvalue - 300;
  } else {
    translateXvalue = translateXvalue >= 0 ? -900 : translateXvalue + 300;
  }
  imageContainer.style.transform = `translateX(${translateXvalue}px)`;
}

prev.addEventListener("click", () => {
  loop(false);
  clearInterval(customInterval);
  customInterval = setInterval(() => {
    loop();
  }, 1000);
});

next.addEventListener("click", () => {
  loop();
  clearInterval(customInterval);
  customInterval = setInterval(() => {
    loop();
  }, 1000);
});
