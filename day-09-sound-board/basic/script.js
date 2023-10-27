const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
const containerEl = document.querySelector(".container");
sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.innerText = sound;
  btn.addEventListener("click", () => {
    stopSound();
    document.getElementById(sound).play();
  });
  containerEl.appendChild(btn);
});

function stopSound() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
}
