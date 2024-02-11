const P = new Pokedex.Pokedex();
const container = document.querySelector(".container");

const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};

async function getPokemonById(idx) {
  const pokemon = await P.getPokemonByName(idx);
  const cardEl = document.createElement("div");
  const processId = processIdFunc(pokemon.id);
  const type = pokemon.types[0].type.name;
  cardEl.innerHTML = `
  <div class="icon">
    <img
      src="${pokemon.sprites.other[`official-artwork`].front_default}"
      alt=""
    />
  </div>
  <p class="id">${processId}</p>
  <p class="name">${pokemon.name}</p>
  <p class="type">Type: ${type}</p>
  `;
  cardEl.style.backgroundColor = colors[type];
  cardEl.classList.add("card");
  container.appendChild(cardEl);
}

function processIdFunc(id) {
  if (id < 10) {
    return `#00${id}`;
  } else if (id < 100) {
    return `#0${id}`;
  } else {
    return `#${id}`;
  }
}

async function init(currentIdx, times) {
  if (currentIdx <= times) {
    await getPokemonById(currentIdx);
    init(currentIdx + 1, times);
  }
}

init(1, 150);
