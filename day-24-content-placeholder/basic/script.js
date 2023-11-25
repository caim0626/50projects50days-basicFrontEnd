const cardHeaderEl = document.getElementById("header");
const titleEl = document.getElementById("title");
const excerptEl = document.getElementById("excerpt");
const profileImg = document.getElementById("profile_img");
const authorName = document.querySelector(".author-info #name");
const authorDate = document.querySelector(".author-info #date");

setTimeout(() => {
  cardHeaderEl.innerHTML =
    '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2102&amp;q=80" alt="">';

  titleEl.innerHTML = "Lorem ipsum dolor sit amet.";
  excerptEl.innerHTML =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, illo?";
  profileImg.innerHTML = '<img src="src/beaver.png" alt="">';
  authorName.innerHTML = "Caim";
  authorDate.innerHTML = "Nov 21, 2023";
  titleEl.classList.remove("animated-bg", "animated-bg-text");
  authorName.classList.remove("animated-bg", "animated-bg-text");
  authorDate.classList.remove("animated-bg", "animated-bg-text");
}, 2500);
