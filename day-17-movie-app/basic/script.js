const main = document.getElementById("main");

const trendingAPI = "https://api.themoviedb.org/3/trending/movie/week";
const searchAPI = "";
const IMG_PATH = (path) => `https://image.tmdb.org/t/p/w500/${path}`;

function getClassByRate(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}

function processFatch(url) {
  fetch(url, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYjAwMzA5NDM0NjRlNmZhNDI0ZjNhNDQ1MTZmMjYxZSIsInN1YiI6IjY1NDRiMmZlMjg2NmZhMDExYmNlNGI4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YPYjEKq-Lpn85dUFwiGSZS5xfwzKnMfYDMfyNSy9qrU",
      accept: "application/json",
    },
  }).then((res) => {
    main.innerHTML = "";
    res.json().then((res) => {
      console.log(res);
      res.results.forEach((movie) => {
        const movieEL = document.createElement("div");
        const rate = movie.vote_average.toFixed(2);
        movieEL.classList.add("movie");
        movieEL.innerHTML = `
            <img src=${IMG_PATH(movie.poster_path)} />
            <div class="title">
              <p>${movie.title}</p>
              <span class=${getClassByRate(rate)}>${rate}</span>
            </div>
            <div class='overview'>
            <h3>Overview</h3>
            <p>${movie.overview}</p>
            </div>
        `;
        main.appendChild(movieEL);
      });
    });
  });
}

// getMovieTrending
const weekTrending = processFatch(trendingAPI);
