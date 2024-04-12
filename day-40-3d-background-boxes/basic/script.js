const boxes = document.querySelector(".boxes");
const mgBtn = document.querySelector("#mg-btn");

for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    const box = document.createElement("div");
    box.innerHTML = `
    <div class="box" style="background-position:${-j * 125}px ${
      -i * 125
    }px"></div>
    `;
    boxes.append(box);
  }
}

mgBtn.addEventListener("click", () => {
  const boxItems = document.querySelectorAll(".box");
  boxes.classList.toggle('big');
  boxItems.forEach((e) => {
    e.classList.toggle("show");
  });
});
