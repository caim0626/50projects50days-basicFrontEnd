const steps = document.querySelectorAll(".step");
const progress = document.querySelector(".progress");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");

prevBtn.addEventListener("click", () => {
  if (prevBtn.hasAttribute("disabled")) return;
  nextBtn.removeAttribute("disabled");
  const stepsCount = steps.length;
  let i = 0;
  for (i; i < stepsCount; i++) {
    if (!steps[i].classList.contains("active")) break;
  }
  steps[i - 1].classList.remove("active");
  progress.style.width = `${((i - 2) / (stepsCount - 1)) * 100}%`;
  if (i - 2 == 0) prevBtn.setAttribute("disabled", true);
});

nextBtn.addEventListener("click", () => {
  if (nextBtn.hasAttribute("disabled")) return;
  prevBtn.removeAttribute("disabled");
  const stepsCount = steps.length;
  let i = 0;
  for (i; i < stepsCount; i++) {
    if (!steps[i].classList.contains("active")) break;
  }
  steps[i].classList.add("active");
  progress.style.width = `${(i / (stepsCount - 1)) * 100 - 2}%`;
  if (i == stepsCount - 1) nextBtn.setAttribute("disabled", true);
});
