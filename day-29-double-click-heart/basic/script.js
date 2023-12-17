const pic = document.querySelector(".pic");
const counter = document.getElementById("counter");

function getMP(e) {
  var e = e || window.event;
  return {
    x:
      e.pageX ||
      e.clientX +
        (document.documentElement.scrollLeft || document.body.scrollLeft),
    y:
      e.pageY ||
      e.clientY +
        (document.documentElement.scrollTop || document.body.scrollTop),
  };
}

function clickHeartEl(e) {
  const { x, y } = getMP(e);
  const heartEl = document.createElement("div");
  heartEl.classList.add("dbclick-heart");
  heartEl.innerHTML = `<i class="fas fa-heart"></i>`;
  heartEl.style.left = x + "px";
  heartEl.style.top = y + "px";

  pic.appendChild(heartEl);
  setTimeout(() => pic.removeChild(heartEl), 600);
}

pic.addEventListener("dblclick", (e) => {
  clickHeartEl(e);
  counter.innerText = Number(counter.innerText) + 1;
});
