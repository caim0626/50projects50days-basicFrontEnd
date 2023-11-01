const incContext = document.querySelectorAll(".inc-context");

incContext.forEach((e) => {
  e.innerText = "0";
  const tar = +e.getAttribute("data-target");
  const inc = tar / 200;
  const update = () => {
    const innerText = +e.innerText;
    if (innerText < tar) {
      e.innerText = innerText + inc;
      setTimeout(update, 1);
    }
  };
  update();
});
