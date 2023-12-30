const selectorEls = document.querySelectorAll(".selector-control input");

function trick(target) {
  let counter = 0,
    targetIdx;
  selectorEls.forEach((e, idx) => {
    e.checked && counter++;
    target === e && (targetIdx = idx);
  });
  counter >= 3 &&
    (selectorEls[
      targetIdx == 0 ? selectorEls.length - 1 : targetIdx - 1
    ].checked = false);
}

selectorEls.forEach((el) => {
  el.addEventListener("change", (e) => trick(e.target));
});
