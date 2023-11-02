const smallCups = document.querySelectorAll(".cup.cup-small");
const remained = document.querySelector(".remained");
const totalCount = document.querySelector(".total-drink-count");
const water = document.querySelector(".water");

smallCups.forEach((smallCup, idx) => {
  smallCup.addEventListener("click", () => {
    // 1. 1 click 1 acitve
    optWater(smallCup);

    // 2. 1 click some acitive
    // rule: if click third cup, first, second, third are all acitve
    // optWater(smallCup, idx);
  });
});

function optWater(smallCup, idx = -1) {
  if (idx >= 0) {
    // count = idx + 1;
    idx = smallCups[idx].classList.contains("active") ? idx - 1 : idx;
    smallCups.forEach((smallCup, inIdx) => {
      if (inIdx <= idx) {
        smallCup.classList.add("active");
      } else {
        smallCup.classList.remove("active");
      }
    });
  } else {
    smallCup.classList.toggle("active");
  }

  let count = document.querySelectorAll(".cup.cup-small.active").length;
  if (count === 0) {
    water.innerText = "";
  } else {
    water.innerText = `${count * 12.5}%`;
  }
  water.style.height = `${count * 40}px`;
  remained.style.height = `${(8 - count) * 40}px`;
  totalCount.innerText = `${(8 - count) * 0.25} L`;
}

// 2. active by the order:
// if i click the third cup, first,second,third will be active.
