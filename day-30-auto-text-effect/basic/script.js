const contentEl = document.querySelector("body h1");
const speedEl = document.getElementById("speed");
const content = "We Love Programming!";

let speed = 300 / speedEl.value;
let idx = 1;

console.log(speed);
function writeContent() {
  if (idx > content.length) idx = 1;
  contentEl.innerHTML = content.slice(0, idx++);
  setTimeout(writeContent, speed);
}

writeContent();
speedEl.addEventListener("input", (e) => {
  speed = 300 / e.target.value;
});
