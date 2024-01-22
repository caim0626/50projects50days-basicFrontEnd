const container = document.querySelector(".container");
const colors = ["orange", "green", "red", "blue", "purple"];

while (container.childElementCount < 500) {
  container.appendChild(craeteBlock());
}

function craeteBlock() {
  const el = document.createElement("div");
  el.addEventListener("mouseenter", () => {
    setColor(el);
  });
  el.addEventListener("mouseleave", () => {
    removeColor(el);
  });
  el.classList.add("block");
  return el;
}

function setColor(el) {
  const color = getRandomColor();
  el.style.backgroundColor = color;
  el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(el) {
  el.style.backgroundColor = "#1d1d1d";
  el.style.boxShadow = "0 0 2px #000";
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
