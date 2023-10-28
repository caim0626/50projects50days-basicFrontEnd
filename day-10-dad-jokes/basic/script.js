const btn = document.querySelector(".dialog button");
const dialogText = document.querySelector(".dialog p");

const config = {
  headers: {
    Accept: "application/json",
  },
};
btn.addEventListener("click", async () => {
  const res = await fetch("https://icanhazdadjoke.com/", config);
  const data = await res.json();
  dialogText.innerText = data.joke;
});
