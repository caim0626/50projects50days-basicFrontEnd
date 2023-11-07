const girds = document.querySelectorAll(".gird-pic");
const fill = document.querySelector(".fill");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

function dragStart() {
  this.classList.add("hold");
  setTimeout(() => (this.className = "invisible"), 0);
}
function dragEnd() {
  this.className = "fill";
}

for (const gird of girds) {
  gird.addEventListener("dragover", dragOver);
  gird.addEventListener("dragenter", dragEnter);
  gird.addEventListener("dragleave", dragLeave);
  gird.addEventListener("drop", dragDrop);
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter() {
  e.preventDefault();
  this.classList.add("hovered");
}

function dragLeave() {
  this.classList.remove("hovered");
}

function dragDrop() {
  this.classList.remove("hovered");
  this.append(fill);
}
