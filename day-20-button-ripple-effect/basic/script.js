const clickEffect = document.querySelector(".clickMe");

clickEffect.addEventListener("click", (e) => {
  const spanEl = document.createElement("span");
  spanEl.classList.add("effect");
  spanEl.style.top = `${e.clientY - e.target.offsetTop}px`;
  spanEl.style.left = `${e.clientX - e.target.offsetLeft}px`;
  clickEffect.appendChild(spanEl);
  setTimeout(() => clickEffect.removeChild(spanEl), 500);
});
