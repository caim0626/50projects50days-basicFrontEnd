const body = document.querySelector("body");
const darkBtn = document.querySelector(".dark-btn");
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const time = document.querySelector(".time");
const date = document.querySelector(".date");
const circle = document.querySelector(".circle");

function initClock() {
  const dateIns = new Date();
  console.log(`
  月份：${dateIns.getMonth()}
  日：${dateIns.getDate()}
  周几：${dateIns.getDay()}
    小时：${dateIns.getHours()}
    分钟：${dateIns.getMinutes()}
    秒：${dateIns.getSeconds()}
    `);
}

darkBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});

const changeClock = () => {
  const dateIns = new Date();
  second.style.transform = `translate(-50%, -100%) rotate(${
    (dateIns.getSeconds() * 360) / 60
  }deg)`;
  minute.style.transform = `translate(-50%, -100%) rotate(${
    (dateIns.getMinutes() * 360) / 60
  }deg)`;
  hour.style.transform = `translate(-50%, -100%) rotate(${
    (dateIns.getHours() * 360) / 12
  }deg)`;
  time.innerText = `${dateIns.getHours()}:${dateIns.getMinutes()} ${
    dateIns.getHours() < 12 ? "AM" : "PM"
  }`;
  const dateStrArr = dateIns.toDateString().split(" ");
  date.innerHTML = `${dateStrArr[0]},${
    dateStrArr[1]
  } <span class="circle">${dateIns.getDate()}</span>`;
};

// setInterval(() => {
//   changeClock(dateIns);
// }, 1000);

setInterval(changeClock, 1000);
