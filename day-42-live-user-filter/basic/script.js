const chatlist = document.querySelector(".chatlist");
const search = document.querySelector("#search");
const listItems = [];
pulldata();

search.addEventListener("input", (e) => {
  filterData(e.target.value);
});

async function pulldata() {
  const res = await fetch("https://randomuser.me/api?results=50");
  const { results } = await res.json();
  results.forEach((e) => {
    const user = document.createElement("div");
    user.innerHTML = `
    <div
            class="icon"
            style="
              background-image: url(${e.picture.thumbnail});
            "
          ></div>
          <div class="intro">
            <h2 class="name">${e.name.first} ${e.name.last}</h2>
            <p class="place">${e.location.state}, ${e.location.country}</p>
          </div>
    `;
    user.classList.add("user");
    listItems.push(user);
    chatlist.append(user);
  });
}
function filterData(text) {
  listItems.forEach((e) => {
    if (e.innerText.toLowerCase().includes(text.toLowerCase())) {
      e.classList.remove("hide");
    } else {
      e.classList.add("hide");
    }
  });
}
