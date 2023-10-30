const textArea = document.getElementById("textarea");
const tags = document.querySelector(".tags");

textArea.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    randomSelect();
  } else {
    createTag(e.target.value);
  }
});

function createTag(text) {
  tags.innerHTML = "";
  text.split(",").forEach((e) => {
    if (e.trim() === "") return;
    const tag = document.createElement("span");
    tag.classList.add("tag");
    tag.innerText = e;
    tags.appendChild(tag);
  });
}

function randomSelect() {
  const tagels = document.querySelectorAll(".tag");
  console.log(tagels);
  const times = Math.random() * 5 + 10;
  const itv = setInterval(() => {
    const el = tagels[Math.floor(Math.random() * tagels.length)];
    el.classList.add("active");
    setTimeout(() => {
      el.classList.remove("active");
    }, 100);
  }, 100);
  setTimeout(() => {
    clearInterval(itv);
    const el = tagels[Math.floor(Math.random() * tagels.length)];
    el.classList.add("active");
  }, times * 100);
  textArea.innerText = "";

  //   for (i = 0; i <= times; i++) {}
}

function pickRandomTag() {}
