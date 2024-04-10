const password = document.querySelector("#password");
const background = document.querySelector(".background");

password.addEventListener("input", (e) => {
  const lengthcal = 20 - e.target.value.length * 2;
  background.style.filter = ` blur(${lengthcal >= 0 ? lengthcal : 0}px)`;
git });
