const searchBtn = document.getElementById("search");

searchBtn.addEventListener("click", () => {
  const searchBar = document.querySelector(".search-container");

  if (searchBar.classList.contains("active")) {
    searchBar.classList.remove("active");
  } else {
    searchBar.classList.add("active");
  }
});
