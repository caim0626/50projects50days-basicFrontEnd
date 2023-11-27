const massageBox = document.querySelector(".massage-box");
const showNotice = document.querySelector(".show-notice");

const noticeTypeArr = ["normal", "error", "success"];

showNotice.addEventListener("click", clickRandomNtice);

function clickRandomNtice() {
  const idx = Math.round(Math.random() * 2);
  clickNtice(idx);
}

function clickNtice(idx) {
  const divEl = document.createElement("div");
  divEl.classList.add(noticeTypeArr[idx]);
  divEl.innerHTML = noticeTypeArr[idx];
  massageBox.append(divEl);
  setTimeout(() => massageBox.removeChild(divEl), 2000);
}
