const getMovies = async () => {
    const url = "https://portiaportia.github.io/json/movies.json";
  
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  };
  
  const showMovies = async () => {
    let movies = await getMovies();
    console.log(movies);
    let moviesSection = document.getElementById("movies-section");

    movies.forEach((movie) =>
      moviesSection.append(getMovieItem(movie))
    );
  };
  
  const getMovieItem = (movie) => {
    let movieSection = document.createElement("section");
    movieSection.classList.add("movie");
    

  
    let a = document.createElement("section");
    let b = document.createElement("section");
    movieSection.append(b);
    movieSection.append(a);

    let image = document.createElement("img");
    b.append(image);
    image.classList.add("image");
    image.src = "https://portiaportia.github.io/json/"+ movie.img;
  
    let h3 = document.createElement("h3");
    h3.innerText = movie.title;
    a.append(h3);
  
    
    let director = document.createElement("p");
    director.textContent = "Director: " + `${movie.director}`;
    a.append(director);

    let actors = document.createElement("p");
    actors.textContent = "Actors: "+`${movie.actors}`;
    a.append(actors);

    let year = document.createElement("p");
    year.textContent = "Year Released: "+`${movie.year}`;
    a.append(year);

    let genres = document.createElement("p");
    genres.textContent = "Genres: "+`${movie.genres}`;
    a.append(genres);

    let description = document.createElement("p");
    description.textContent = `${movie.description}`;
    a.append(description);

    

    return movieSection;
  };
  
  
  window.onload = () => showMovies();