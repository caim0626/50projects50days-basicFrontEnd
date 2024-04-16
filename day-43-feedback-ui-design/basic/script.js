const choices = document.querySelectorAll(".choice div");
const btn = document.querySelector(".btn");
const revContainer = document.querySelector(".review-container");
const resContainer = document.querySelector(".response-container");
const feedback = document.querySelector(".feedback");

choices[0].classList.add("shadow-md");
choices.forEach((e, idx) => {
  e.addEventListener("click", (item) => {
    cleanShadow();
    e.classList.add("shadow-md");
  });
});

btn.addEventListener("click", () => {
  revContainer.classList.add("hide");
  feedback.innerText = `Feedback: ${currentFocus()}`;
  resContainer.classList.remove("hide");
});

function cleanShadow() {
  choices.forEach((e) => {
    e.classList.remove("shadow-md");
  });
}

function currentFocus() {
  let feedback = "";
  const feedbackEmm = ["Unhappy", "Neutral", "satisfied"];
  choices.forEach((e) => {
    if (e.classList.contains("shadow-md")) feedback = e.innerText;
  });
  feedbackEmm.forEach((e) => {
    if (feedback.includes(e)) feedback = e;
  });

  return feedback;
}
