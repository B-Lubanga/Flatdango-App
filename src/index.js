// This is the 1st part
document.addEventListener("DOMContentLoaded", () => {
  fetchMovieDetails();
});

function fetchMovieDetails() {
  fetch("http://localhost:3000/films/1")
    .then((response) => response.json())
    .then((movie) => displayMovie(movie))
    .catch((error) => console.error("Error fetching movie:", error));
}

function displayMovie(movie) {
  document.getElementById("title").textContent = movie.title;
  document.getElementById("poster").src = movie.poster;
  document.getElementById(
    "runtime"
  ).textContent = `Runtime: ${movie.runtime} min`;
  document.getElementById(
    "showtime"
  ).textContent = `Showtime: ${movie.showtime}`;
  document.getElementById("description").textContent = movie.description;

  // This is for calculating tickets that are available
  let availableTickets = movie.capacity - movie.tickets_sold;
  document.getElementById(
    "tickets"
  ).textContent = `Available Tickets: ${availableTickets}`;
}
