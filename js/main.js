const requestMoviesUrl = `http://www.omdbapi.com/?apikey=2be4f404&`;
const movieListElement = document.querySelector("ul");
const input = document.querySelector("#movieKeywords");
const form = document.querySelector("form");
form.addEventListener("submit", e => {
  e.preventDefault();
  const xhttp = new XMLHttpRequest();

  xhttp.open("GET", `${requestMoviesUrl}s=${input.value}`);
  xhttp.onload = () => {
    const requestResponse = JSON.parse(xhttp.responseText);
    console.log(requestResponse);
    requestResponse.Search.forEach(movie => {
      console.log(movie);
      movieListElement.insertAdjacentHTML(
        "afterbegin",
        `<li><img src=${movie.Poster}><p>${movie.Title}, ${movie.Type}</p></li>`
      );
      movieListElement.addEventListener("click", e => {
        console.log(e.target);
        if (e.target === movie.imdbID)
          e.target.insertAdjacentHTML("beforeend", `<li>${movie.Year}</li>`);
      });
    });
  };

  xhttp.send();
});
