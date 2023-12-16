const APIURL = "https://api.github.com/users/";

const form = document.getElementById("form");
const search = document.getElementById("search");
const card = document.querySelector(".content");

async function renderCard(searchText) {
  try {
    const { data } = await axios(APIURL + searchText);
    createUserCard(data);
    createRepos(searchText);
  } catch (e) {
    console.log(e);
    if (e.response.status == "404") {
      createErrorCard("No profile with this username");
    }
  }
}

async function createRepos(searchText) {
  try {
    const { data } = await axios(APIURL + searchText + "/repos?sort=created");
    appendRepos(data);
  } catch (e) {
    createErrorCard("Problem fetching repos");
  }
}

async function appendRepos(data) {
  const info = document.querySelector(".info");
  const reposEl = document.createElement("div");
  info.appendChild(reposEl);
  reposEl.classList.add("pros");

  data.slice(0, 5).forEach((repo) => {
    const el = document.createElement("a");
    el.href = repo.html_url;
    el.innerText = repo.name;
    reposEl.appendChild(el);
  });
}

function createUserCard(data) {
  console.log(data);
  card.innerHTML = `
  <div class='profile-card'>
  <div><img src="${data.avatar_url}" alt="" class="heard-icon"></div>
  <div class="info">
    <h2 class="username">${data.login}</h2>
    <p class="intro">
    ${data.bio}
    </p>
    <ul>
      <li>${data.followers} Followers</li>
      <li>${data.following} Following</li>
      <li>${data.public_repos} Repos</li>
    </ul>
  </div>
  </div>
    `;
}

function createErrorCard(msg) {
  card.innerHTML = `
            <div class="profile-card">
                <h1>${msg}</h1>
            </div>
        `;
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const searchText = search.value;
  if (searchText) {
    renderCard(searchText);
    search.value = "";
  }
});
