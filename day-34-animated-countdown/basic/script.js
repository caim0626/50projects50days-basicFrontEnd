const numsContainer = document.querySelector(".num-container");
const getReadyEl = document.querySelector(".show");
const repalyEl = document.querySelector(".replay");

function rotate(num) {
  if (num >= 0) {
    const numEl = document.createElement("div");
    numEl.classList.add("num");
    numEl.innerHTML = `${num}`;
    numsContainer.appendChild(numEl);
    setTimeout(() => {
      numsContainer.removeChild(numEl);
      rotate(--num);
    }, 1000);
  } else {
    showOut(getReadyEl);
    showIn(repalyEl);
    getReadyEl.classList.toggle("hidden");
    repalyEl.classList.toggle("hidden");
  }
}

function showIn(el) {
  el.classList.add("show-in");
  setTimeout(() => {
    el.classList.remove("show-in");
  }, 100);
}

function showOut(el) {
  el.classList.add("show-out");
  setTimeout(() => {
    el.classList.remove("show-out");
  }, 100);
}

repalyEl.addEventListener("click", () => {
  showOut(repalyEl);
  showIn(getReadyEl);
  getReadyEl.classList.toggle("hidden");
  repalyEl.classList.toggle("hidden");
  rotate(3);
});

rotate(3);
