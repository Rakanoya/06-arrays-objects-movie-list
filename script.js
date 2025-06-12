// Arrays holding movie objects for each genre
const comedyMovies = [
  { title: "Deadpool", year: 2016, description: "A wisecracking mercenary becomes a superhero." },
  { title: "Step Brothers", year: 2008, description: "Two grown men become step brothers and cause chaos." },
  { title: "Anchorman", year: 2004, description: "A 1970s newsman deals with a new female anchor." },
  { title: "The Hangover", year: 2009, description: "A bachelor party in Vegas goes hilariously wrong." }
];
const actionMovies = [
  { title: "Mad Max: Fury Road", year: 2015, description: "A post-apocalyptic road war for survival." },
  { title: "John Wick", year: 2014, description: "A retired hitman seeks vengeance." },
  { title: "Die Hard", year: 1988, description: "A cop battles terrorists in a skyscraper." },
  { title: "The Dark Knight", year: 2008, description: "Batman faces the Joker in Gotham City." }
];
const dramaMovies = [
  { title: "The Shawshank Redemption", year: 1994, description: "A man finds hope in prison." },
  { title: "Forrest Gump", year: 1994, description: "A simple man lives an extraordinary life." },
  { title: "Fight Club", year: 1999, description: "An insomniac forms an underground club." },
  { title: "The Godfather", year: 1972, description: "A mafia family struggles with power and loyalty." }
];
const sciFiMovies = [
  { title: "Inception", year: 2010, description: "A thief enters dreams to steal secrets." },
  { title: "The Matrix", year: 1999, description: "A hacker discovers reality is a simulation." },
  { title: "Interstellar", year: 2014, description: "Astronauts travel through a wormhole to save humanity." },
  { title: "Blade Runner 2049", year: 2017, description: "A new blade runner uncovers a secret." }
];

// Get the genre dropdown and movie recommendations elements
const genreDropdown = document.getElementById("genre");
const movieRecommendations = document.getElementById("movieRecommendations");

// Set up event listener for when the user selects a genre
genreDropdown.addEventListener("change", function() {
  // Get the selected genre
  const selectedGenre = genreDropdown.value;

  // Variable to hold the list of movies
  let movieList = [];

  // Assign movies to the movieList based on the selected genre
  if (selectedGenre === "Comedy") {
    movieList = comedyMovies;
  } else if (selectedGenre === "Action") {
    movieList = actionMovies;
  } else if (selectedGenre === "Drama") {
    movieList = dramaMovies;
  } else if (selectedGenre === "Sci-Fi") {
    movieList = sciFiMovies;
  }

  // Display the list of movies on the page using a for loop
  // Create a string to hold the HTML for the movie list
  let movieListHTML = "<ul>";

  // Use a for loop to go through each movie object in the movieList array
  for (let i = 0; i < movieList.length; i++) {
    // Get the current movie object
    const movie = movieList[i];
    // Add each movie's title, year, and description as a list item
    movieListHTML += `<li><strong>${movie.title}</strong> (${movie.year}): ${movie.description}</li>`;
  }

  // Close the unordered list
  movieListHTML += "</ul>";

  // Show the movie list in the movieRecommendations div
  movieRecommendations.innerHTML = movieListHTML;
});