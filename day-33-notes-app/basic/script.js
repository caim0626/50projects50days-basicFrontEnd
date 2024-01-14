const notesContainer = document.querySelector(".notes-container");
const addBtn = document.getElementById("add-btn");
const notes = JSON.parse(localStorage.getItem("notes"));

initial();

addBtn.addEventListener("click", () => {
  addNewNote();
});

function initial() {
  if (notes) {
    notes.forEach((note) => addNewNote(note));
  }
}

function addNewNote(text = "") {
  const note = document.createElement("div");
  note.innerHTML = `
      <div class="note">
      <div class="bar">
          <button class="edit"><i class="fas fa-edit"></i></button>
          <button class="delete"><i class="fas fa-trash-alt"></i></button>
      </div>
      <div class="main-content note-content-style ${text ? "" : "hidden"}">
      ${text}
      </div>
      <textarea
          name=""
          id=""
          class="text-area note-content-style ${text ? "hidden" : ""}"
          cols="30"
          rows="10"
      >${text}</textarea>
      </div>
    `;
  appendDelFunc(note);
  appendEditFunc(note);
  notesContainer.append(note);
  updateLS();
}

function appendDelFunc(note) {
  const deleteEl = note.querySelector(".delete");
  console.log(deleteEl);
  console.log(note);
  deleteEl.addEventListener("click", () => {
    notesContainer.removeChild(note);
    updateLS();
  });
}

function appendEditFunc(note) {
  const editEl = note.querySelector(".edit");
  //   record
  const textArea = note.querySelector(".text-area");
  const mainContent = note.querySelector(".main-content");
  textArea.addEventListener("input", () => {
    mainContent.innerHTML = textArea.value;
    updateLS();
  });
  editEl.addEventListener("click", () => {
    mainContent.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
  });
}

function updateLS() {
  const notesText = document.querySelectorAll("textarea");

  const notes = [];

  notesText.forEach((note) => notes.push(note.value));
  console.log(notes);
  localStorage.setItem("notes", JSON.stringify(notes));
}
