const label = document.querySelector(".current-value");
const range = document.querySelector("#range");

range.addEventListener("input", (e) => {
  label.innerText = e.target.value;
  console.log();
  const rate =
    (parseInt(window.getComputedStyle(range).width.replace("px", "")) - 16) /
    100;
  label.style.transform = `translate(${
    (-50 + parseInt(e.target.value)) * rate
  }px,-48px)`;
});
