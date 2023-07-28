const panels = document.querySelectorAll(".panel");
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    const oldPanel = document.querySelector(".panel.active");
    oldPanel.classList.remove("active");
    panel.classList.add("active");
  });
});
