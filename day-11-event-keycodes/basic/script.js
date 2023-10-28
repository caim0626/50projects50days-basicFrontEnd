const insert = document.querySelector(".insert");

console.log("hello world");
document.addEventListener("keydown", (e) => {
  insert.innerHTML = `
  <div class="key">
  ${e.key === " " ? e.code : e.key}
  <small>event.key</small>
  </div>
  <div class="key">
  ${e.keyCode}
  <small>event.keyCode</small>
  </div>
  <div class="key">
  ${e.code}
  <small>event.code</small>
  </div>
  `;
});
