const body = document.querySelector("body");
const darkBtn = document.querySelector(".dark-btn");
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const time = document.querySelector(".time");
const date = document.querySelector(".date");
const circle = document.querySelector(".circle");

darkBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});

const changeClock = () => {
  const dateIns = new Date();
  const hours = dateIns.getHours();
  second.style.transform = `translate(-50%, -100%) rotate(${
    (dateIns.getSeconds() * 360) / 60
  }deg)`;
  minute.style.transform = `translate(-50%, -100%) rotate(${
    (dateIns.getMinutes() * 360) / 60
  }deg)`;
  hour.style.transform = `translate(-50%, -100%) rotate(${
    (hours * 360) / 12
  }deg)`;
  time.innerText = `${
    hours <= 12 ? hours : hours - 12
  }:${dateIns.getMinutes()} ${hours < 12 ? "AM" : "PM"}`;
  const dateStrArr = dateIns.toDateString().split(" ");
  date.innerHTML = `${dateStrArr[0]},${
    dateStrArr[1]
  } <span class="circle">${dateIns.getDate()}</span>`;
};

setInterval(changeClock, 1000);
