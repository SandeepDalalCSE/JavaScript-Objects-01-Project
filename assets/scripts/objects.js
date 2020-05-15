// selecting a button whose id is 'add-movie-btn' in the index.html
const addMovieBtn = document.getElementById("add-movie-btn");
// selecting another button whose id is 'search-btn' in the index.html
const searchBtn = document.getElementById("search-btn");

const movies = [];

const addMovieHandler = () => {
  const title = document.getElementById("title").value; //only value not full dom node
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;

  if (title.trim() === "" || extraName.trim() === "" || extraValue.trim === "") {
    return;
  }

  const newMovie = {
    info: {
      title,
      [extraName]: extraValue
    },
    id: Math.random()
  }; // an object is created to hold the values.

  movies.push(newMovie);
  console.log(movies);
};

// Now connect method to the button
addMovieBtn.addEventListener("click", addMovieHandler);
